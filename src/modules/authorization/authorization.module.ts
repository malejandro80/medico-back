import { Module } from '@nestjs/common';
import { AuthorizationGuard } from './authorization.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [AuthorizationGuard],
})
export class AuthorizationModule {}
