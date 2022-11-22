import mongoose from 'mongoose'
import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsUrl, IsInt } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({
    message: 'Nombre es requerido',
  })
  @ApiProperty()
  name: string

  @IsString()
  @ApiProperty()
  description: string

  @ApiProperty()
  price: number

  @IsInt()
  @ApiProperty()
  stock: number

  @IsUrl()
  @ApiProperty()
  image: string
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
