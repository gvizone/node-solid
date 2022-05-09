import { User } from '../../../entity/User';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { CreateUserDTO } from './CreateUserDTO';

export class CreateUserCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(data: CreateUserDTO) {
    const user = new User(data);
    await this.usersRepository.save(user);
  }
}
