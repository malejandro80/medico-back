import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userRepositoryAdapter } from 'src/users/infrastructure/user.repository.adapter';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userAdapter: userRepositoryAdapter,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userAdapter.findByEmail(email);

    if (!(await bcryptjs.compare(pass.toString(), user?.password))) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.uuid, email: user.email };
    return {
      access_token: `Bearer ${await this.jwtService.signAsync(payload)}`,
      expire: 1000 * 60 * 60 * 60,
    };
  }
}
