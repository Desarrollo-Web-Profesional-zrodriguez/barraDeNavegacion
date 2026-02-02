import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'
import { Curso } from './db/models/curso.js'

async function main() {
  await initDatabase()

  const curso = new Curso({
    titulo: 'Introducción a Mongoose',
    descripcion:
      'Aprende a usar Mongoose con MongoDB en tus aplicaciones Node.js',
    instructor: 'Juan Pérez',
    precio: 150.0,
    nivelComplejidad: 'basico',
    duracion: 40,
  })

  await curso.save()

  const createCurso = await curso.save()

  await Curso.findByIdAndUpdate(createCurso._id, {
    $set: { titulo: 'Hello again, Mongoose!' },
  })

  const cursos = await Curso.find()
  console.log(cursos)
}

main()