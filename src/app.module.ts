import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { AuthorizationModule } from './authorization/authorization.module';
import config from './config';
import { CouponsModule } from './coupons/coupons.module';
import { enviroments } from './enviroments';
import { HelloController } from './hello.controller';
import { UserService } from './users/application/user.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        DB_PORT: Joi.number().required(),
      }),
    }),
    MongooseModule.forRoot('mongodb://mongo:27017/medico'),
    UsersModule,
    AuthorizationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CouponsModule,
  ],
  controllers: [HelloController],
  providers: [UserService],
})
export class AppModule {}
