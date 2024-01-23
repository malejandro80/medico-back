import { Body, Controller, Post, Get } from '@nestjs/common';
import { userEntity } from '../domain/user.entity';
import { userRepositoryAdapter } from './user.repository.adapter';
import { Public } from '../../shared/decorators/auth';
import { UserService } from '../application/user.service';
// import { AuthorizationGuard } from '../../../authorization/authorization.guard';

@Controller({
  path: 'user',
})
export class UserController {
  // private readonly logger = new Logger(TicketController.name);

  constructor(private userService: UserService) {}
  @Public()
  @Post('register')
  // @UseGuards(AuthorizationGuard)
  async create(@Body() req: userEntity) {
    return await this.userService.registerUser(req);
  }
  @Public()
  @Get()
  async getAll() {
    return await this.userService.getAllUSers();
  }
}
