import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { userRepositoryAdapter } from 'src/users/infrastructure/adapters/mongo/user.repository.adapter';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [JwtModule.register({ secret: 'mySecret' }),UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}