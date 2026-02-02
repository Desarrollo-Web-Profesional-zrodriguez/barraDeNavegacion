import { mongoose } from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27017/curso'
  mongoose.connection.on('open', () => {
    console.info('Se ha conectado a la base de datos:', DATABASE_URL)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}