import { userEntity } from './user.entity';
import { v4 as uuidv4 } from 'uuid';
export class userValue implements userEntity {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  countryCode: number;
  phone: number;
  password: string;

  constructor(user: userEntity) {
    Object.assign(this, user);
    this._id = uuidv4();
  }
}
