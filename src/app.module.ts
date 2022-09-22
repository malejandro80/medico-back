import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/medico'),
    TicketModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
