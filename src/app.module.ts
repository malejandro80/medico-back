import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import { HelloController } from './hello.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/medico'),
    UsersModule,
    AuthorizationModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
