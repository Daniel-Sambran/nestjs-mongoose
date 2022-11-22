import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common'
import { CreateBrandDto, UpdateBrandDto } from '../dto/brand.dto'
import { BrandsService } from '../services/brands.service'

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto)
  }

  @Get()
  findAll() {
    return this.brandsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // console.log('llego ' + id)
    return this.brandsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateBrandDto) {
    return this.brandsService.update(+id, updateProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(+id)
  }
}
