import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  create(user: ICreateUser): Promise<IUser>;
  findByEmail(email: string): Promise<IUser | null | undefined>;
}
export { IUsersRepository };
