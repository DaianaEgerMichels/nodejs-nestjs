import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class ProductImageDTO {
  @IsUrl(undefined, {
    message: 'The url provided is not valid',
  })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Description is required, it cannot be empty' })
  @MaxLength(1000, {
    message: 'Description must be less than 1000 characters',
  })
  description: string;
}
