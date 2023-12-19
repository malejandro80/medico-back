import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Error, Model } from 'mongoose';
import { userEntity } from '../../../domain/entities/user.entity';
import { userRepository } from '../../../domain/repositories/user.repository';
import { User, UserSchema } from './schemas/user.schema';
import { userValue } from '../../../domain/valueObjects/user.value';
import * as bcrypt from 'bcrypt';
const saltOrRounds = 10;

@Injectable()
export class userRepositoryAdapter implements userRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: userEntity) {
    const password = await bcrypt.hash(user.password.toString(), saltOrRounds);
    const newUser = new userValue({ ...user, password });
    const res = await this.userModel.create(newUser);
    return { resp: res, result: 'newUser' };
  }

  findById(uuid: string): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<userEntity> {
    const query = this.userModel.where({ email });
    const user = await query.findOne();
    if (!user)throw new Error('not found');
    return user;
  }
}
