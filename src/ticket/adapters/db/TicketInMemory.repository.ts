import { Injectable } from '@nestjs/common';
import { Ticket } from 'src/ticket/domain/model/Ticket.model';
import { TicketRepository } from 'src/ticket/domain/ports/Ticket.repository';

@Injectable()
export class TicketInMemory implements TicketRepository {
  private readonly tickets: Ticket[] = [];

  create(ticket: Ticket): Ticket {
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): Ticket[] {
    return this.tickets;
  }
}
