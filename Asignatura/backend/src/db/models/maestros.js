import mongoose, { Schema } from 'mongoose'

const maestrosSchema = new Schema(
  {
    nombre: { type: String, required: true },
    titulo: { type: String, required: true },
    experiencias: { type: Number, required: true },
    paga: { type: Number, required: true, min: 1000 },
    cursos: { type: String, required: true },
    horasActivo: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
)

export const Maestro = mongoose.model('maestros', maestrosSchema)