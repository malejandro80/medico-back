import { InjectModel } from '@nestjs/mongoose';
import { ConflictException, Injectable } from '@nestjs/common';
import { Error, Model } from 'mongoose';
import { userEntity } from '../domain/user.entity';
import { userRepository } from '../domain/user.repository';
import { User } from './user.schema';



@Injectable()
export class userRepositoryAdapter implements userRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(user: userEntity) {
    const res = await this.userModel.create(user);
    return { resp: res, result: 'newUser' };
  }

  async getAll() {
    return await this.userModel.find();
  }

  findById(_id: string): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<userEntity> {
    const query = this.userModel.where({ email });
    const user = await query.findOne();
    if (!user) throw new Error('not found');
    return user;
  }
}
