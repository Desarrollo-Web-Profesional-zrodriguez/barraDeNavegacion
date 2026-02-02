import { Curso } from '../db/models/curso.js'

export async function createCurso({
  titulo,
  descripcion,
  instructor,
  precio,
  nivelComplejidad,
  duracion,
}) {
  const curso = new Curso({
    titulo,
    descripcion,
    instructor,
    precio,
    nivelComplejidad,
    duracion,
  })
  return await curso.save()
}

async function listCursos(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  const sortOrderValue = sortOrder === 'ascending' ? 1 : -1
  return await Curso.find(query).sort({ [sortBy]: sortOrderValue })
}

export async function listAllCursos(opciones) {
  return await listCursos({}, opciones)
}

export async function listCursosByInstructor(instructor, opciones) {
  return await listCursos({ instructor }, opciones)
}

export async function listCursosByNivel(nivelComplejidad, opciones) {
  return await listCursos({ nivelComplejidad }, opciones)
}

export async function getCursoById(cursoId) {
  return await Curso.findById(cursoId)
}

export async function updateCurso(
  cursoId,
  { titulo, descripcion, instructor, precio, nivelComplejidad, duracion },
) {
  return await Curso.findOneAndUpdate(
    { _id: cursoId },
    {
      $set: {
        titulo,
        descripcion,
        instructor,
        precio,
        nivelComplejidad,
        duracion,
      },
    },
    { new: true },
  )
}

export async function deleteCurso(cursoId) {
  return await Curso.deleteOne({ _id: cursoId })
}