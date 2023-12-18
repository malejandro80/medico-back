import { Body, Controller, Post } from '@nestjs/common';
import { userEntity } from '../../domain/entities/user.entity';
import { userRepositoryAdapter } from '../adapters/mongo/user.repository.adapter';
// import { AuthorizationGuard } from '../../../authorization/authorization.guard';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  constructor(private userAdapter: userRepositoryAdapter) {}

  @Post()
  // @UseGuards(AuthorizationGuard)
  async create(@Body() req: userEntity){
    return await this.userAdapter.create(req);
  }
}
