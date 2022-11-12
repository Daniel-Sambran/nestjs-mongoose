import { PartialType } from '@nestjs/mapped-types'

export class CreateBrandDto {
  readonly name: string
  readonly image: string
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
