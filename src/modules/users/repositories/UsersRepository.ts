import { prisma } from './../../../database/client';
import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';
import { IUsersRepository } from './IUsersRepository';

class UsersRepository implements IUsersRepository {
  async create({ name, email }: ICreateUser): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return !!user;
  }
}
export { UsersRepository };
