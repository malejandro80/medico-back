import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserSchema,
  User,
} from './infrastructure/adapters/mongo/schemas/user.schema';
import { UserController } from './infrastructure/controllers/user.controller';
import { userRepositoryAdapter } from './infrastructure/adapters/mongo/user.repository.adapter';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [userRepositoryAdapter],
  exports: [userRepositoryAdapter],
})
export class UsersModule {}
