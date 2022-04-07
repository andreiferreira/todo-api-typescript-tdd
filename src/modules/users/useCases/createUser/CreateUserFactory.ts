import { UsersRepository } from '../../repositories/UsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

export const createUserFactory = () => {
  const usersRepository = new UsersRepository();
  const createUserService = new CreateUserService(usersRepository);
  const createUserController = new CreateUserController(createUserService);

  return createUserController;
};
