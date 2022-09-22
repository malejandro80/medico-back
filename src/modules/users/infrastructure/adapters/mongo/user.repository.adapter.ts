import { userEntity } from 'src/modules/users/domain/entities/user.entity';
import { userRepository } from '../../../domain/repositories/user.repository';
class userRepositoryAdapter implements userRepository {
  constructor(parameters) {}
  create(user: userEntity): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }
  findById(uuid: string): Promise<userEntity> {
    throw new Error('Method not implemented.');
  }
}
