import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/ticket/domain/model/Ticket.model';
import { TicketService } from 'src/ticket/domain/ports/Ticket.service';
import { TicketCommand } from './Ticket.command';

@Injectable()
export class TicketApiService {
  constructor(private ticketService: TicketService) {}

  create(tickerCommand: TicketCommand): Ticket {
    return this.ticketService.create(
      tickerCommand.description,
      tickerCommand.priority,
    );
  }

  findAll(): Ticket[] {
    return this.ticketService.findAll();
  }
}
