import { userEntity } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
export class userValue implements userEntity {
  uuid: string;
  name: string;
  lastName: string;
  email: string;
  countryCode: number;
  phone: number;

  constructor(user: userEntity) {
    Object.assign(this, user);
    this.uuid = uuidv4();
  }
}
