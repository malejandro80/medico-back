import { Module } from '@nestjs/common';
import { TicketController } from './adapters/api/Ticket.controller';
import { TicketApiService } from './adapters/api/TicketApi.service';
// import { TicketRepository } from './domain/ports/Ticket.repository';
import { TicketRepository } from './domain/ports/Ticket.repository';
import { TicketInMemory } from './adapters/db/TicketInMemory.repository';
import { TicketService } from './domain/ports/Ticket.service';

@Module({
  imports: [],
  controllers: [TicketController],

  providers: [
    TicketService,
    TicketApiService,
    {
      provide: TicketRepository,
      useClass: TicketInMemory, // can add condition on ENV, inject mock impl for unit testing
    },
  ],
})
export class TicketModule {}
