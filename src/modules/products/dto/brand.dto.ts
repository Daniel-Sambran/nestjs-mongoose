import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsString, IsNotEmpty, IsUrl } from 'class-validator'

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty({
    message: 'Nombre es requerido',
  })
  @ApiProperty()
  readonly name: string

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
