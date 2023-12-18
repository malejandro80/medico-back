import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { userEntity } from 'src/modules/users/domain/entities/user.entity';
import { userRepository } from '../../../domain/repositories/user.repository';
import { User, UserSchema } from './schemas/user.schema';
import { userValue } from 'src/modules/users/domain/valueObjects/user.value';

@Injectable()
export class userRepositoryAdapter implements userRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(user: userEntity) {
    const newUser = new userValue(user);
    const res = await this.userModel.create(newUser);
    return {resp:newUser,result:'newUser' };
  }
  findById(uuid: string): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }
}
