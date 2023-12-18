import { userEntity } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import  * as bcrypt from "bcrypt";
const saltOrRounds = 10;
export class userValue implements userEntity {
  uuid: string;
  name: string;
  lastName: string;
  email: string;
  countryCode: number;
  phone: number;
  password: string;

  constructor(user: userEntity) {
    Object.assign(this, user);
    this.uuid = uuidv4();
    // this.password = bcrypt.hash(user.password, saltOrRounds);
    this.password = '1223'
  }
}
