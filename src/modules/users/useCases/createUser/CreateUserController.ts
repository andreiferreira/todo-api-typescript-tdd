import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute(name, email, password);
    return response.json(user);
  }
}
