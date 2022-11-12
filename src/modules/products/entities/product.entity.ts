import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'
import { Brand } from './brand.entity'

@Schema()
export class Product {
  // @Prop()
  // _id: string

  @Prop({ required: true })
  name: string

  @Prop()
  description: string

  @Prop({ type: Number, index: true })
  price: number

  @Prop({ type: Number })
  stock: number

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId
}
export const ProductSchema = SchemaFactory.createForClass(Product)
ProductSchema.index({ price: 1 })
