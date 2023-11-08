import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
