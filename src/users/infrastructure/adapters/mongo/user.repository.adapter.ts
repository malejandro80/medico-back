import { InjectModel } from '@nestjs/mongoose';
import { ConflictException, Injectable } from '@nestjs/common';
import { Error, Model } from 'mongoose';
import { userEntity } from '../../../domain/entities/user.entity';
import { userRepository } from '../../../domain/repositories/user.repository';
import { User } from './schemas/user.schema';
import { userValue } from '../../../domain/valueObjects/user.value';
import * as bcryptjs from 'bcryptjs';
const saltOrRounds = 10;

@Injectable()
export class userRepositoryAdapter implements userRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: userEntity) {
    const query = this.userModel.where({ email: user.email });
    const requestedUser = await query.findOne();

    if (requestedUser) {
      throw new ConflictException('user already exist');
    }
    
    const password = await bcryptjs.hash(
      user.password.toString(),
      saltOrRounds,
    );
    const newUser = new userValue({ ...user, password });
    const res = await this.userModel.create(newUser);
    return { resp: res, result: 'newUser' };
  }

  async getAll() {
    return await this.userModel.find();
  }

  findById(uuid: string): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<userEntity> {
    const query = this.userModel.where({ email });
    const user = await query.findOne();
    if (!user) throw new Error('not found');
    return user;
  }
}
