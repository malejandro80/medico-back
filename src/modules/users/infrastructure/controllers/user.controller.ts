import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { userEntity } from '../../domain/entities/user.entity';
import { userRepositoryAdapter } from '../adapters/mongo/user.repository.adapter';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  constructor(private userAdapter: userRepositoryAdapter) {}

  @Post()
  async create(@Body() req: userEntity): Promise<userEntity> {
    return await this.userAdapter.create(req);
  }
}
