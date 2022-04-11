import { ICreateUser } from '../models/ICreateUser';
import { User } from '@prisma/client';

interface IUsersRepository {
  create(user: ICreateUser): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
export { IUsersRepository };
