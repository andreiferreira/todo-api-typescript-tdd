import { User } from '@modules/users/entities/User';
import { IUsersRepository } from '../IUsersRepository';
import { v4 as uuid } from 'uuid';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
      created_at: new Date(),
    });

    this.users.push(user);
    return user;
  }
  async exists(email: string): Promise<boolean> {
    const user = this.users.some(user => user.email === email);
    return user;
  }
}
export { UsersRepositoryInMemory };
