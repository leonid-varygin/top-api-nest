import { IsNumber, IsString, IsOptional, ValidateNested, IsArray } from "class-validator";
import { Type } from "class-transformer";

class ProductCharacteristicDto {
  @IsString()
  name: string;
  @IsString()
  value: string;
}

export class CreateProductDto {
  @IsString()
  image: string;

  @IsString()
  title: string;

  @IsNumber()
  price: string;

  @IsOptional()
  @IsNumber()
  oldPrice?: number;

  @IsNumber()
  credit: number;

  @IsString()
  description: string;

  @IsString()
  advantages: string;

  @IsString()
  disAdvantages: string;

  @IsArray()
  @IsString({each: true})
  categories: string[];

  @IsString({each: true})
  tags: string[];

  @IsArray()
  @ValidateNested()
  @Type(() => ProductCharacteristicDto)
  characteristics: ProductCharacteristicDto[];
}


