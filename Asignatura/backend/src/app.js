import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { cursosRoutes } from './routes/cursos.js'
import { maestrosRoutes } from './routes/maestros.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

cursosRoutes(app)
maestrosRoutes(app)

app.get('/', (req, res) => {
  res.send('Hola desde Express!')
})

export { app }