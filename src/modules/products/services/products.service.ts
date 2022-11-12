import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateProductDto } from '../dto/create-product.dto'
import { UpdateProductDto } from '../dto/update-product.dto'
import { Product } from '../entities/product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto)
    return newProduct.save()
  }

  findAll() {
    return this.productModel.find().exec()
  }

  findOne(id: string) {
    return this.productModel.findById(id).exec()
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const newProduct = new this.productModel(updateProductDto)
    return this.productModel.findByIdAndUpdate(id, newProduct).exec()
  }

  remove(id: number) {
    return this.productModel.findByIdAndDelete(id).exec()
  }
}
