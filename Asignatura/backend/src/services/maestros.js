import { Maestro } from '../db/models/maestros.js'

export async function createMaestro({
  nombre,
  titulo,
  experiencias,
  paga,
  cursos,
  horasActivo,
}) {
  const maestro = new Maestro({
    nombre,
    titulo,
    experiencias,
    paga,
    cursos,
    horasActivo,
  })
  return await maestro.save()
}

async function listMaestros(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  const sortOrderValue = sortOrder === 'ascending' ? 1 : -1
  return await Maestro.find(query).sort({ [sortBy]: sortOrderValue })
}

export async function listAllMaestros(opciones) {
  return await listMaestros({}, opciones)
}

export async function listMaestrosByTitulo(titulo, opciones) {
  return await listMaestros({ titulo }, opciones)
}

export async function listMaestrosByPaga(paga, opciones) {
  return await listMaestros({ paga }, opciones)
}

export async function getMaestroById(maestroId) {
  return await Maestro.findById(maestroId)
}

export async function updateMaestro(
  maestroId,
  { nombre, titulo, experiencias, paga, cursos, horasActivo },
) {
  return await Maestro.findOneAndUpdate(
    { _id: maestroId },
    {
      $set: {
        nombre,
        titulo,
        experiencias,
        paga,
        cursos,
        horasActivo,
      },
    },
    { new: true },
  )
}

export async function deleteMaestro(maestroId) {
  return await Maestro.deleteOne({ _id: maestroId })
}
