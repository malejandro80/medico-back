import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserSchema,
  User,
} from './infrastructure/user.schema';
import { UserController } from './infrastructure/user.controller';
import { userRepositoryAdapter } from './infrastructure/user.repository.adapter';
import { UserService } from './application/user.service';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    userRepositoryAdapter,
    UserService
  ],
  exports: [userRepositoryAdapter],
})
export class UsersModule {}
