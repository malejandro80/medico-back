import { userRepository } from '../../domain/repositories/user.repository';
import { userEntity } from '../../domain/entities/user.entity';
import { userValue } from '../../domain/valueObjects/user.value';
class userUseCases {
  constructor(private readonly userRepository: userRepository) {}
  async registerUser(user: userEntity) {
    const newUser = new userValue(user);
    return await this.userRepository.create(newUser);
  }
}
