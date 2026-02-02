import {
  listAllCursos,
  listCursosByInstructor,
  listCursosByNivel,
  getCursoById,
  createCurso,
  updateCurso,
  deleteCurso,
} from '../services/cursos.js'

export function cursosRoutes(app) {
  app.get('/api/v1/cursos', async (req, res) => {
    const { sortBy, sortOrder, instructor, nivel } = req.query
    const options = { sortBy, sortOrder }
    try {
      if (instructor && nivel) {
        return res
          .status(400)
          .json({ error: 'Consulta por instructor o nivel, no ambas' })
      } else if (instructor) {
        return res.json(await listCursosByInstructor(instructor, options))
      } else if (nivel) {
        return res.json(await listCursosByNivel(nivel, options))
      } else {
        return res.json(await listAllCursos(options))
      }
    } catch (err) {
      console.error('Error listando cursos', err)
      return res.status(500).end()
    }
  })

  app.get('/api/v1/cursos/:id', async (req, res) => {
    const { id } = req.params
    try {
      const curso = await getCursoById(id)
      if (curso === null) return res.status(404).end()
      return res.json(curso)
    } catch (err) {
      console.error('Error con método Post', err)
      return res.status(500).end()
    }
  })

  app.post('/api/v1/cursos', async (req, res) => {
    try {
      const curso = await createCurso(req.body)
      return res.json(curso)
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })

  app.patch('/api/v1/cursos/:id', async (req, res) => {
    try {
      const curso = await updateCurso(req.params.id, req.body)
      return res.json(curso)
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })

  app.delete('/api/v1/cursos/:id', async (req, res) => {
    try {
      const { deletedCount } = await deleteCurso(req.params.id)
      if (deletedCount === 0) return res.sendStatus(404)
      return res.status(204).end()
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })
}