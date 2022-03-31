import { User } from '@modules/users/entities/User';
import { ICreateUser } from '@modules/users/models/ICreateUser';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email }: ICreateUser) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const userCreate = User.create({ name, email });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}
export { CreateUserService };
