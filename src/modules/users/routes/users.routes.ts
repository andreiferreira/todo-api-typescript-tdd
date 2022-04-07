import { Router } from 'express';
import { createUserFactory } from '../useCases/createUser/CreateUserFactory';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  createUserFactory().handle(request, response);
});

export { usersRoutes };
