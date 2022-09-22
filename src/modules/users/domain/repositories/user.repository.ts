import { userEntity } from '../entities/user.entity';

export interface userRepository {
  create(user: userEntity): Promise<userEntity | null>;
  findById(uuid: string): Promise<userEntity | null>;
}
