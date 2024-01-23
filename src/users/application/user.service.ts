import { ConflictException, Injectable } from '@nestjs/common';
import { userEntity } from '../domain/user.entity';
import { userValue } from '../domain/user.value';
import * as bcryptjs from 'bcryptjs';
// import { userRepository } from '../domain/user.repository';
import { userRepositoryAdapter } from '../infrastructure/user.repository.adapter';
// import { userRepository } from '../domain/user.repository';
// import { userRepositoryAdapter } from '../infrastructure/user.repository.adapter';
const saltOrRounds = 10;

@Injectable()
export class UserService {
  constructor(private UserRepository: userRepositoryAdapter) {}

  async registerUser(user: userEntity) {
    const existsUSer = await this.UserRepository.findByEmail(user.email);

    if (existsUSer) {
      throw new ConflictException('user already exist');
    }

    const password = await bcryptjs.hash(
      user.password.toString(),
      saltOrRounds,
    );
    const newUser = new userValue({ ...user, password });
    const res = await this.UserRepository.create(newUser);
    return { resp: res, result: 'newUser' };
  }

  async getAllUSers(){
    return await this.UserRepository.getAll();
  }
}
