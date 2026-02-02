import dotenv from 'dotenv'
dotenv.config()

import { app } from './app.js'
import { initDatabase } from './db/init.js'

async function main() {
  try {
    await initDatabase()
    const PORT = process.env.PORT
    app.listen(PORT)
    console.info(`Servidor Express ejecutandose sobre http://localhost:${PORT}`)
  } catch (err) {
    console.error('Error conectandose a la Base de Datos:', err)
  }
}

main()