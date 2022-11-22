import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateBrandDto, UpdateBrandDto } from '../dto/brand.dto'
import { Brand } from '../entities/brand.entity'

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private productModel: Model<Brand>) {}
  create(createBrandDto: CreateBrandDto) {
    const newBrand = new this.productModel(createBrandDto)
    return newBrand.save()
  }

  findAll() {
    return this.productModel.find().exec()
  }

  findOne(id: string) {
    return this.productModel.findById(id).exec()
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    const newBrand = new this.productModel(updateBrandDto)
    return this.productModel.findByIdAndUpdate(id, newBrand).exec()
  }

  remove(id: number) {
    return this.productModel.findByIdAndDelete(id).exec()
  }
}
