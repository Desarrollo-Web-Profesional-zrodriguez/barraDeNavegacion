import {
  listAllMaestros,
  listMaestrosByTitulo,
  listMaestrosByPaga,
  getMaestroById,
  createMaestro,
  updateMaestro,
  deleteMaestro,
} from '../services/maestros.js'

export function maestrosRoutes(app) {
  app.get('/api/v1/maestros', async (req, res) => {
    const { sortBy, sortOrder, titulo, paga } = req.query
    const options = { sortBy, sortOrder }
    try {
      if (titulo && paga) {
        return res
          .status(400)
          .json({ error: 'Consulta por titulo o paga, no ambas' })
      } else if (titulo) {
        return res.json(await listMaestrosByTitulo(titulo, options))
      } else if (paga) {
        return res.json(await listMaestrosByPaga(paga, options))
      } else {
        return res.json(await listAllMaestros(options))
      }
    } catch (err) {
      console.error('Error listando maestros', err)
      return res.status(500).end()
    }
  })

  app.get('/api/v1/maestro/:id', async (req, res) => {
    const { id } = req.params
    try {
      const maestro = await getMaestroById(id)
      if (maestro === null) return res.status(404).end()
      return res.json(maestro)
    } catch (err) {
      console.error('Error con método Post', err)
      return res.status(500).end()
    }
  })

  app.post('/api/v1/maestros', async (req, res) => {
    try {
      const maestro = await createMaestro(req.body)
      return res.json(maestro)
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })

  app.patch('/api/v1/maestros/:id', async (req, res) => {
    try {
      const maestro = await updateMaestro(req.params.id, req.body)
      return res.json(maestro)
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })

  app.delete('/api/v1/maestros/:id', async (req, res) => {
    try {
      const { deletedCount } = await deleteMaestro(req.params.id)
      if (deletedCount === 0) return res.sendStatus(404)
      return res.status(204).end()
    } catch (err) {
      console.error('Error creando Post', err)
      return res.status(500).end()
    }
  })
}
