import mongoose, { Schema } from 'mongoose'

const cursoSchema = new Schema(
  {
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    instructor: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    nivelComplejidad: {
      type: String,
      enum: ['basico', 'intermedio', 'avanzado'],
      required: true,
    },
    duracion: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
)

export const Curso = mongoose.model('curso', cursoSchema)