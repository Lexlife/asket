import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {

  constructor() { }

  async login(userDto: CreateUserDto) {
  }

  async registration(userDto: CreateUserDto) {
  }
}
