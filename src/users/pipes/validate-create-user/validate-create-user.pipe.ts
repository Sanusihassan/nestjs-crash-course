import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUserDTO } from 'src/users/dtos/creaetUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDTO, metadata: ArgumentMetadata) {
    console.log("inside validatecreateuserpipe");
    const val = parseInt(`${value.age}`);
    if (isNaN(val)) {
      throw new HttpException(`${value.age} is not a number`, HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: val };
  }
}
