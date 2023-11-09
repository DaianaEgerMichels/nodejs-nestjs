import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ name: 'IsUniqueEmailValidator', async: true })
export class IsUniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}
  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const existsUserEmail = await this.userRepository.existsEmail(value);
    return !existsUserEmail;
  }
}

export const IsUniqueEmail = (optionsValidations: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (object: Object, propertie: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertie,
      options: optionsValidations,
      constraints: [],
      validator: IsUniqueEmailValidator,
    });
  };
};
