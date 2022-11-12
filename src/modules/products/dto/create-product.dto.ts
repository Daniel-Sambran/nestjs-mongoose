import mongoose from 'mongoose'

export class CreateProductDto {
  // _id: mongoose.ObjectId
  name: string
  description: string
  price: number
  stock: number
  image: string
}
