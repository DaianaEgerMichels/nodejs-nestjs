import {
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsDate,
  IsPositive,
  MaxLength,
  IsString,
  Min,
  IsNumber,
  ArrayMinSize,
} from 'class-validator';
import { ProductFeatureDTO } from './ProductFeature.dto';
import { ProductImageDTO } from './ProductImage.dto';
import { Type } from 'class-transformer';

export class ProductCreateDTO {
  @IsString()
  @IsNotEmpty({ message: 'Name is required, it cannot be empty' })
  name: string;

  @IsPositive({ message: 'Value must be greater than 0' })
  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'Value must be greater than 0' })
  value: number;

  @IsPositive({ message: 'Value must be greater than 0' })
  @IsNumber(
    { maxDecimalPlaces: 0 },
    {
      message: 'Quantity available must be an integer',
    },
  )
  @Min(0, { message: 'Quantity available must be greater than 0' })
  quantityAvailable: number;

  @IsString()
  @IsNotEmpty({ message: 'Description is required, it cannot be empty' })
  @MaxLength(1000, {
    message: 'Description must be less than 1000 characters',
  })
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => ProductFeatureDTO)
  characteristics: ProductFeatureDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductImageDTO)
  images: ProductImageDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Category is required, it cannot be empty' })
  category: string;

  @IsDate({ message: 'The date provided is not valid' })
  dateCreate: Date;

  @IsDate({ message: 'The date provided is not valid' })
  dateUpdate: Date;
}
