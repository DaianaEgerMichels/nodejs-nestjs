import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/is-unique-email.validator';

export class UserUpdateDTO {
  @IsNotEmpty({ message: 'Name is required, it cannot be empty' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'The email provided is not valid' })
  @IsUniqueEmail({ message: 'Email already exists' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Password must have at least 6 characters' })
  @IsOptional()
  password: string;
}
