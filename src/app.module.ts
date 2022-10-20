import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import { HelloController } from './hello.controller';
import * as Joi from 'joi';
import { enviroments } from './enviroments';
import config from './config';

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
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/medico'),
    UsersModule,
    AuthorizationModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
