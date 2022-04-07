import { User } from '@modules/users/entities/User';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepositoryInMemory } from './../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserService } from './CreateUserService';

describe('Create use', () => {
  let usersRepository: IUsersRepository;
  let createUserService: CreateUserService;
  beforeAll(() => {
    usersRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(usersRepository);
  });
  it('Should create a new user', async () => {
    const newUser: User = {
      name: 'User 01',
      email: 'user01@email.com',
    };

    const user = await createUserService.execute(newUser);
    console.log(user);
    expect(user).toHaveProperty('id');
  });

  /*   it('should not create a existent user', async () => {
    const newUser: User = {
      name: 'User 01',
      email: 'user01@email.com',
    };

    await createUserService.execute(newUser);

    await expect(createUserService.execute(newUser)).rejects.toEqual(
      new Error('User already exists!'),
    );
  }); */
});
