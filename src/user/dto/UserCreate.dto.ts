import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validation/is-unique-email.validator';

export class UserCreateDTO {
  @IsNotEmpty({ message: 'Name is required, it cannot be empty' })
  name: string;

  @IsEmail(undefined, { message: 'The email provided is not valid' })
  @IsUniqueEmail({ message: 'Email already exists' })
  email: string;

  @MinLength(6, { message: 'Password must have at least 6 characters' })
  password: string;
}
