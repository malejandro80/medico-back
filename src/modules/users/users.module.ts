import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserSchema,
  User,
} from './infrastructure/adapters/mongo/schemas/user.schema';
import { UserController } from './infrastructure/controllers/user.controller';

@Module({
  controllers: [UserController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
})
export class UsersModule {}
