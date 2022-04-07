import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';

interface IUsersRepository {
  create(user: ICreateUser): Promise<IUser>;
  exists(email: string): Promise<boolean>;
}
export { IUsersRepository };
