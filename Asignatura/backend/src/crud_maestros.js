import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'
import { Maestro } from './db/models/maestros.js'

async function main() {
  await initDatabase()
 // agregar maestros
  const maestro1 = new Maestro({
    nombre: 'Dr. Carlos Méndez',
    titulo: 'PhD en Computer Science',
    experiencias: 15,
    paga: 7500,
    cursos: 'Algoritmos Avanzados, Estructuras de Datos',
    horasActivo: 40,
  })
  await maestro1.save()
  console.log(`Maestro creado: ${maestro1.nombre} (ID: ${maestro1._id})`)

  const maestro2 = new Maestro({
    nombre: 'Ing. Ana Torres',
    titulo: 'Master en Data Science',
    experiencias: 10,
    paga: 6000,
    cursos: 'Machine Learning, Python, R',
    horasActivo: 35,
  })
  await maestro2.save()
  console.log(`Maestro creado: ${maestro2.nombre} (ID: ${maestro2._id})`)

  const maestro3 = new Maestro({
    nombre: 'Lic. Pedro Ramírez',
    titulo: 'Licenciado en Sistemas',
    experiencias: 8,
    paga: 5000,
    cursos: 'Bases de Datos, SQL, NoSQL',
    horasActivo: 30,
  })
  await maestro3.save()
  console.log(
    `Maestro creado: ${maestro3.nombre} (ID: ${maestro3._id})\n`,
  )

  //Obtener todos los maestros
  const todosMaestros = await Maestro.find()
  console.log(`Total de maestros: ${todosMaestros.length}`)
  todosMaestros.forEach((m) => {
    console.log(` - ${m.nombre} | ${m.titulo} | Paga: $${m.paga}`)
  })
  console.log('')

  // Filtrar por título
  console.log('BUSCAR POR PARÁMETRO - Maestros con PhD')
  const maestrosPhD = await Maestro.find({
    titulo: { $regex: 'PhD', $options: 'i' },
  })
  console.log(`Encontrados: ${maestrosPhD.length}`)
  maestrosPhD.forEach((m) => {
    console.log(`   - ${m.nombre} | ${m.titulo}`)
  })
  console.log('')

  // Filtrar por experiencia mayor a 9 años
  console.log(
    'BUSCAR POR PARÁMETRO - Maestros con más de 9 años de experiencia...',
  )
  const maestrosExperimentados = await Maestro.find({
    experiencias: { $gt: 9 },
  })
  console.log(`Encontrados: ${maestrosExperimentados.length}`)
  maestrosExperimentados.forEach((m) => {
    console.log(
      `   - ${m.nombre} | Experiencia: ${m.experiencias} años | Paga: $${m.paga}`,
    )
  })
  console.log('')

  // Filtrar por paga mayor o igual a 6000
  console.log('BUSCAR POR PARÁMETRO - Maestros con paga >= $6000')
  const maestrosBienPagados = await Maestro.find({ paga: { $gte: 6000 } })
  console.log(`Encontrados: ${maestrosBienPagados.length}`)
  maestrosBienPagados.forEach((m) => {
    console.log(`   - ${m.nombre} | Paga: $${m.paga}`)
  })
  console.log('')

  // ORDENAR - Por paga ascendente
  console.log('ORDENAR - Maestros ordenados por paga (menor a mayor)...')
  const maestrosOrdenadosPaga = await Maestro.find().sort({ paga: 1 })
  maestrosOrdenadosPaga.forEach((m, index) => {
    console.log(`   ${index + 1}. ${m.nombre} - $${m.paga}`)
  })
  console.log('')

  //ORDENAR - Por experiencia descendente
  console.log(
    'ORDENAR - Maestros ordenados por experiencia (mayor a menor)...',
  )
  const maestrosOrdenadosExp = await Maestro.find().sort({ experiencias: -1 })
  maestrosOrdenadosExp.forEach((m, index) => {
    console.log(`   ${index + 1}. ${m.nombre} - ${m.experiencias} años`)
  })
  console.log('')

  //MODIFICAR - Actualizar un maestro
  console.log('MODIFICAR - Actualizando datos de un maestro...')
  const maestroActualizar = await Maestro.findById(maestro1._id)
  console.log(
    ` Antes: ${maestroActualizar.nombre} | Paga: $${maestroActualizar.paga}`,
  )

  await Maestro.findByIdAndUpdate(maestro1._id, {
    $set: {
      paga: 8500,
      horasActivo: 45,
      cursos:
        'Algoritmos Avanzados, Estructuras de Datos, Inteligencia Artificial',
    },
  })

  const maestroActualizado = await Maestro.findById(maestro1._id)
  console.log(
    `Después: ${maestroActualizado.nombre} | Paga: $${maestroActualizado.paga}`,
  )
  console.log(`Cursos actualizados: ${maestroActualizado.cursos}`)
  console.log(`Horas activo: ${maestroActualizado.horasActivo}\n`)

  //MODIFICAR - Actualizar múltiples maestros
  console.log(
    'MODIFICAR - Incrementar 10% de paga a maestros con más de 8 años...',
  )
  const resultadoUpdate = await Maestro.updateMany(
    { experiencias: { $gt: 8 } },
    { $mul: { paga: 1.1 } },
  )
  console.log(`Maestros actualizados: ${resultadoUpdate.modifiedCount}`)

  const maestrosActualizados = await Maestro.find({ experiencias: { $gt: 8 } })
  maestrosActualizados.forEach((m) => {
    console.log(`   - ${m.nombre} | Nueva paga: $${Math.round(m.paga)}`)
  })
  console.log('')

  //ELIMINAR - Borrar un maestro
  console.log('ELIMINAR - Eliminando a un maestro...')
  console.log(`Eliminando: ${maestro3.nombre}`)
  await Maestro.findByIdAndDelete(maestro3._id)
  console.log(`Maestro eliminado correctamente\n`)

  //Resultados
  console.log('Resultados')
  const maestrosFinales = await Maestro.find()
  console.log(`   Total de maestros en la BD: ${maestrosFinales.length}`)
  maestrosFinales.forEach((m) => {
    console.log(
      `   - ${m.nombre} | Paga: $${Math.round(m.paga)} | Exp: ${m.experiencias} años`,
    )
  })
  console.log('')
  process.exit(0)
}

// Ejecutar el script
main().catch((error) => {
  console.error('Error en el script:', error)
  process.exit(1)
})
