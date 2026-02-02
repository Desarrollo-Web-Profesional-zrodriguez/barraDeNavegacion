import mongoose from 'mongoose'
import { describe, expect, test, beforeEach } from '@jest/globals'
import {
  listAllMaestros,
  listMaestrosByTitulo,
  listMaestrosByPaga,
  getMaestroById,
  createMaestro,
  updateMaestro,
  deleteMaestro,
} from '../services/maestros.js'
import { Maestro } from '../db/models/maestros.js'

describe('Creando maestros', () => {
  test('con todos los parámetros debe ser Exitoso', async () => {
    const maestro = {
      nombre: 'Dr. Carlos Méndez',
      titulo: 'PhD en Computer Science',
      experiencias: 15,
      paga: 5000,
      cursos: 'Node.js, React, MongoDB',
      horasActivo: 40,
    }
    const createdMaestro = await createMaestro(maestro)
    expect(createdMaestro._id).toBeInstanceOf(mongoose.Types.ObjectId)
    const foundMaestro = await Maestro.findById(createdMaestro._id)
    expect(foundMaestro).toEqual(expect.objectContaining(maestro))
    expect(foundMaestro.createdAt).toBeInstanceOf(Date)
    expect(foundMaestro.updatedAt).toBeInstanceOf(Date)
  })

  test('sin un nombre debe fallar', async () => {
    const maestro = {
      titulo: 'PhD en Mathematics',
      experiencias: 10,
      paga: 4500,
      cursos: 'Cálculo, Álgebra',
      horasActivo: 35,
    }
    try {
      await createMaestro(maestro)
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    }
  })

  test('con paga menor a 1000 debe fallar', async () => {
    const maestro = {
      nombre: 'María López',
      titulo: 'Licenciada en Física',
      experiencias: 5,
      paga: 500,
      cursos: 'Física I',
      horasActivo: 20,
    }
    try {
      await createMaestro(maestro)
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    }
  })

  test('con parámetros mínimos debe ser exitoso', async () => {
    const maestro = {
      nombre: 'Ana Torres',
      titulo: 'Maestra en Frontend',
      experiencias: 3,
      paga: 3000,
      cursos: 'HTML, CSS, JavaScript',
      horasActivo: 25,
    }
    const createdMaestro = await createMaestro(maestro)
    expect(createdMaestro._id).toBeInstanceOf(mongoose.Types.ObjectId)
  })
})

const sampleMaestros = [
  {
    nombre: 'Dr. Juan García',
    titulo: 'PhD en Computer Science',
    experiencias: 20,
    paga: 8000,
    cursos: 'Arquitectura de Software, Algoritmos',
    horasActivo: 45,
  },
  {
    nombre: 'Ing. María López',
    titulo: 'Master en Data Science',
    experiencias: 12,
    paga: 6000,
    cursos: 'Machine Learning, Python',
    horasActivo: 40,
  },
  {
    nombre: 'Lic. Pedro Ramírez',
    titulo: 'Licenciado en Informática',
    experiencias: 8,
    paga: 4500,
    cursos: 'Bases de Datos, SQL',
    horasActivo: 35,
  },
  {
    nombre: 'Mtra. Ana Hernández',
    titulo: 'Master en UX/UI Design',
    experiencias: 10,
    paga: 5500,
    cursos: 'Diseño Web, Figma',
    horasActivo: 30,
  },
]

let createdSampleMaestros = []

beforeEach(async () => {
  await Maestro.deleteMany({})
  createdSampleMaestros = []
  for (const maestro of sampleMaestros) {
    const createdMaestro = new Maestro(maestro)
    createdSampleMaestros.push(await createdMaestro.save())
  }
})

describe('listando maestros', () => {
  test('debe retornar todos los maestros', async () => {
    const maestros = await listAllMaestros()
    expect(maestros.length).toEqual(createdSampleMaestros.length)
  })

  test('debe retornar maestros ordenados por fecha de creación descendente por defecto', async () => {
    const maestros = await listAllMaestros()
    const sortedSampleMaestros = createdSampleMaestros.sort(
      (a, b) => b.createdAt - a.createdAt,
    )
    expect(maestros.map((maestro) => maestro.createdAt)).toEqual(
      sortedSampleMaestros.map((maestro) => maestro.createdAt),
    )
  })

  test('debe tomar en cuenta opciones de ordenamiento proporcionadas', async () => {
    const maestros = await listAllMaestros({
      sortBy: 'paga',
      sortOrder: 'ascending',
    })
    const sortedSampleMaestros = createdSampleMaestros.sort(
      (a, b) => a.paga - b.paga,
    )
    expect(maestros.map((maestro) => maestro.paga)).toEqual(
      sortedSampleMaestros.map((maestro) => maestro.paga),
    )
  })

  test('debe filtrar maestros por título', async () => {
    const maestros = await listMaestrosByTitulo('PhD en Computer Science')
    expect(maestros.length).toBe(1)
    expect(maestros[0].nombre).toBe('Dr. Juan García')
  })

  test('debe filtrar maestros por paga', async () => {
    const maestros = await listMaestrosByPaga(6000)
    expect(maestros.length).toBe(1)
    expect(maestros[0].nombre).toBe('Ing. María López')
  })
})

describe('obteniendo un maestro', () => {
  test('debe retornar el maestro completo', async () => {
    const maestro = await getMaestroById(createdSampleMaestros[0]._id)
    expect(maestro.toObject()).toEqual(createdSampleMaestros[0].toObject())
  })

  test('debe fallar si el id no existe', async () => {
    const maestro = await getMaestroById('000000000000000000000000')
    expect(maestro).toEqual(null)
  })
})

describe('actualizando maestros', () => {
  test('debe actualizar la propiedad especificada', async () => {
    await updateMaestro(createdSampleMaestros[0]._id, {
      paga: 9000,
    })
    const updatedMaestro = await Maestro.findById(createdSampleMaestros[0]._id)
    expect(updatedMaestro.paga).toEqual(9000)
  })

  test('no debe actualizar otras propiedades', async () => {
    await updateMaestro(createdSampleMaestros[0]._id, {
      paga: 9000,
    })
    const updatedMaestro = await Maestro.findById(createdSampleMaestros[0]._id)
    expect(updatedMaestro.nombre).toEqual('Dr. Juan García')
  })

  test('debe actualizar el timestamp updatedAt', async () => {
    await updateMaestro(createdSampleMaestros[0]._id, {
      paga: 9000,
    })
    const updatedMaestro = await Maestro.findById(createdSampleMaestros[0]._id)
    expect(updatedMaestro.updatedAt.getTime()).toBeGreaterThan(
      createdSampleMaestros[0].updatedAt.getTime(),
    )
  })

  test('debe fallar si el id no existe', async () => {
    const maestro = await updateMaestro('000000000000000000000000', {
      paga: 9000,
    })
    expect(maestro).toEqual(null)
  })

  test('debe actualizar múltiples propiedades', async () => {
    await updateMaestro(createdSampleMaestros[0]._id, {
      paga: 9500,
      horasActivo: 50,
      cursos: 'Arquitectura de Software, Algoritmos, Cloud Computing',
    })
    const updatedMaestro = await Maestro.findById(createdSampleMaestros[0]._id)
    expect(updatedMaestro.paga).toEqual(9500)
    expect(updatedMaestro.horasActivo).toEqual(50)
    expect(updatedMaestro.cursos).toEqual(
      'Arquitectura de Software, Algoritmos, Cloud Computing',
    )
  })
})

describe('eliminando maestros', () => {
  test('debe remover el maestro de la base de datos', async () => {
    const result = await deleteMaestro(createdSampleMaestros[0]._id)
    expect(result.deletedCount).toEqual(1)
    const deletedMaestro = await Maestro.findById(createdSampleMaestros[0]._id)
    expect(deletedMaestro).toEqual(null)
  })

  test('debe fallar si el id no existe', async () => {
    const result = await deleteMaestro('000000000000000000000000')
    expect(result.deletedCount).toEqual(0)
  })
})
