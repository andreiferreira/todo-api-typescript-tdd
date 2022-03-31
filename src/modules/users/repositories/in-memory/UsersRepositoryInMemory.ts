import { User } from '@modules/users/entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { v4 as uuid } from 'uuid';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
}
export { UsersRepositoryInMemory };
