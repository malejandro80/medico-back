import { userEntity } from './user.entity';

export interface userRepository {
  create(user: userEntity);
  findById(uuid: string): Promise<userEntity | null>;
  findByEmail(email: string): Promise<userEntity | null>;
  getAll(): Promise<userEntity[] | null>;
}
