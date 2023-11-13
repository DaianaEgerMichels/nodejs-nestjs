import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ProductFeatureDTO {
  @IsString()
  @IsNotEmpty({ message: 'Name is required, it cannot be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Value is required, it cannot be empty' })
  @MaxLength(1000, {
    message: 'Description must be less than 1000 characters',
  })
  description: string;
}
