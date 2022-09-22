import { userEntity } from '../entities/user.entity';

export class userValue implements userEntity {
  uuid: string;
  name: string;
  lastName: string;
  email: string;
  countryCode: number;
  phone: number;

  constructor(user: userEntity) {
    Object.assign(this, user);
  }
}
