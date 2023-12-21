import { Body, Controller, Post, Get } from '@nestjs/common';
import { userEntity } from '../../domain/entities/user.entity';
import { userRepositoryAdapter } from '../adapters/mongo/user.repository.adapter';
import { Public } from '../../../shared/decorators/auth';
// import { AuthorizationGuard } from '../../../authorization/authorization.guard';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  constructor(private userAdapter: userRepositoryAdapter) {}
  @Public()
  @Post('register')
  // @UseGuards(AuthorizationGuard)
  async create(@Body() req: userEntity) {
    return await this.userAdapter.create(req);
  }

  @Get()
  async getAll() {
    return await this.userAdapter.getAll();
  }
}
