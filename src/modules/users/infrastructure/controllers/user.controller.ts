import { Body, Controller, Get, Logger, Post } from '@nestjs/common';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  // constructor(private ticketService: TicketService) {}

  @Post()
  create(@Body() tickeCommand: any): any {
    return { res: 'hola mundo' };
    // const ticker = this.ticketService.create(
    //   tickeCommand.description,
    //   tickeCommand.priority,
    // );
    // this.logger.debug(tickeCommand);
    // this.logger.debug({ ticker });
    // return { ...ticker };
  }
}
