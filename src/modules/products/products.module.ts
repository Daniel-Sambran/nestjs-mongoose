import { Module } from '@nestjs/common'
import { ProductsService } from './services/products.service'
import { ProductsController } from './controllers/products.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Product, ProductSchema } from './entities/product.entity'
import { BrandsController } from './controllers/brands.controller'
import { BrandsService } from './services/brands.service'
import { Brand, BrandSchema } from './entities/brand.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  ],
  controllers: [ProductsController, BrandsController],
  providers: [ProductsService, BrandsService],
})
export class ProductsModule {}
