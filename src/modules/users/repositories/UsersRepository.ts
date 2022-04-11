import { prisma } from './../../../database/client';
import { ICreateUser } from '../models/ICreateUser';
import { IUsersRepository } from './IUsersRepository';
import { PrismaClient, User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  private repository: PrismaClient;

  constructor() {
    this.repository = prisma;
  }
  async create({ name, email, password }: ICreateUser): Promise<void> {
    const user = this.repository.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }
}
export { UsersRepository };
