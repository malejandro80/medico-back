import { userEntity } from '../entities/user.entity';

export interface userRepository {
  create(user: userEntity);
  findById(uuid: string): Promise<userEntity | null>;
}
