import { IUsersRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  public async execute(
    name: string,
    email: string,
    password: string,
  ): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    console.log('service');
    const newUser = await this.usersRepository.create({
      name,
      email,
      password,
    });
  }
}
export { CreateUserService };
