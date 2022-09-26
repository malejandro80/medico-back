import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { userValue } from '../../domain/valueObjects/user.value';
import { userRepositoryAdapter } from '../adapters/mongo/user.repository.adapter';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  constructor(private userAdapter: userRepositoryAdapter) {}

  @Post()
  create(@Body() req: any): any {
    const user = new userValue(req);
    const savedUser = this.userAdapter.create(user);
    return { res: savedUser };
    // const ticker = this.ticketService.create(
    //   tickeCommand.description,
    //   tickeCommand.priority,
    // );
    // this.logger.debug(tickeCommand);
    // this.logger.debug({ ticker });
    // return { ...ticker };
  }
}
