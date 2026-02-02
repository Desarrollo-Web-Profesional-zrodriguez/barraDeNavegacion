import mongoose from 'mongoose'
import { describe, expect, test, beforeEach } from '@jest/globals'
import {
  listAllCursos,
  listCursosByInstructor,
  listCursosByNivel,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
} from '../services/cursos.js'
import { Curso } from '../db/models/curso.js'

describe('Creando cursos', () => {
  test('con todos los parámetros debe ser Exitoso', async () => {
    const curso = {
      titulo: 'Introduction to Node.js',
      descripcion: 'Learn the basics of Node.js and Express',
      instructor: 'Juan García',
      precio: 49.99,
      nivelComplejidad: 'basico',
      duracion: 10,
    }
    const createdCurso = await createCurso(curso)
    expect(createdCurso._id).toBeInstanceOf(mongoose.Types.ObjectId)
    const foundCurso = await Curso.findById(createdCurso._id)
    expect(foundCurso).toEqual(expect.objectContaining(curso))
    expect(foundCurso.createdAt).toBeInstanceOf(Date)
    expect(foundCurso.updatedAt).toBeInstanceOf(Date)
  })

  test('sin un titulo debe fallar', async () => {
    const curso = {
      descripcion: 'Curso sin título',
      instructor: 'Juan García',
      precio: 29.99,
      nivelComplejidad: 'basico',
      duracion: 5,
    }
    try {
      await createCurso(curso)
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
    }
  })

  test('con parámetros mínimos debe ser exitoso', async () => {
    const curso = {
      titulo: 'Python Basics',
      descripcion: 'Learn Python programming',
      instructor: 'María López',
      precio: 39.99,
      nivelComplejidad: 'basico',
      duracion: 8,
    }
    const createdCurso = await createCurso(curso)
    expect(createdCurso._id).toBeInstanceOf(mongoose.Types.ObjectId)
  })
})

const sampleCursos = [
  {
    titulo: 'JavaScript Advanced',
    descripcion: 'Advanced JavaScript concepts',
    instructor: 'Juan García',
    precio: 79.99,
    nivelComplejidad: 'avanzado',
    duracion: 20,
  },
  {
    titulo: 'React Fundamentals',
    descripcion: 'Learn React from scratch',
    instructor: 'Juan García',
    precio: 59.99,
    nivelComplejidad: 'intermedio',
    duracion: 15,
  },
  {
    titulo: 'Full Stack MERN',
    descripcion: 'MongoDB, Express, React, Node.js stack',
    instructor: 'Juan García',
    precio: 99.99,
    nivelComplejidad: 'avanzado',
    duracion: 30,
  },
  {
    titulo: 'CSS Mastery',
    descripcion: 'Master CSS and responsive design',
    instructor: 'María López',
    precio: 44.99,
    nivelComplejidad: 'intermedio',
    duracion: 12,
  },
]

let createdSampleCursos = []

beforeEach(async () => {
  await Curso.deleteMany({})
  createdSampleCursos = []
  for (const curso of sampleCursos) {
    const createdCurso = new Curso(curso)
    createdSampleCursos.push(await createdCurso.save())
  }
})

describe('listando cursos', () => {
  test('debe retornar todos los cursos', async () => {
    const cursos = await listAllCursos()
    expect(cursos.length).toEqual(createdSampleCursos.length)
  })

  test('debe retornar cursos ordenados por fecha de creación descendente por defecto', async () => {
    const cursos = await listAllCursos()
    const sortedSampleCursos = createdSampleCursos.sort(
      (a, b) => b.createdAt - a.createdAt,
    )
    expect(cursos.map((curso) => curso.createdAt)).toEqual(
      sortedSampleCursos.map((curso) => curso.createdAt),
    )
  })

  test('debe tomar en cuenta opciones de ordenamiento proporcionadas', async () => {
    const cursos = await listAllCursos({
      sortBy: 'precio',
      sortOrder: 'ascending',
    })
    const sortedSampleCursos = createdSampleCursos.sort(
      (a, b) => a.precio - b.precio,
    )
    expect(cursos.map((curso) => curso.precio)).toEqual(
      sortedSampleCursos.map((curso) => curso.precio),
    )
  })

  test('debe filtrar cursos por instructor', async () => {
    const cursos = await listCursosByInstructor('Juan García')
    expect(cursos.length).toBe(3)
  })

  test('debe filtrar cursos por nivel de complejidad', async () => {
    const cursos = await listCursosByNivel('avanzado')
    expect(cursos.length).toBe(2)
  })
})

describe('obteniendo un curso', () => {
  test('debe retornar el curso completo', async () => {
    const curso = await getCursoById(createdSampleCursos[0]._id)
    expect(curso.toObject()).toEqual(createdSampleCursos[0].toObject())
  })

  test('debe fallar si el id no existe', async () => {
    const curso = await getCursoById('000000000000000000000000')
    expect(curso).toEqual(null)
  })
})

describe('actualizando cursos', () => {
  test('debe actualizar la propiedad especificada', async () => {
    await updateCurso(createdSampleCursos[0]._id, {
      precio: 89.99,
    })
    const updatedCurso = await Curso.findById(createdSampleCursos[0]._id)
    expect(updatedCurso.precio).toEqual(89.99)
  })

  test('no debe actualizar otras propiedades', async () => {
    await updateCurso(createdSampleCursos[0]._id, {
      precio: 89.99,
    })
    const updatedCurso = await Curso.findById(createdSampleCursos[0]._id)
    expect(updatedCurso.titulo).toEqual('JavaScript Advanced')
  })

  test('debe actualizar el timestamp updatedAt', async () => {
    await updateCurso(createdSampleCursos[0]._id, {
      precio: 89.99,
    })
    const updatedCurso = await Curso.findById(createdSampleCursos[0]._id)
    expect(updatedCurso.updatedAt.getTime()).toBeGreaterThan(
      createdSampleCursos[0].updatedAt.getTime(),
    )
  })

  test('debe fallar si el id no existe', async () => {
    const curso = await updateCurso('000000000000000000000000', {
      precio: 89.99,
    })
    expect(curso).toEqual(null)
  })
})

describe('eliminando cursos', () => {
  test('debe remover el curso de la base de datos', async () => {
    const result = await deleteCurso(createdSampleCursos[0]._id)
    expect(result.deletedCount).toEqual(1)
    const deletedCurso = await Curso.findById(createdSampleCursos[0]._id)
    expect(deletedCurso).toEqual(null)
  })

  test('debe fallar si el id no existe', async () => {
    const result = await deleteCurso('000000000000000000000000')
    expect(result.deletedCount).toEqual(0)
  })
})