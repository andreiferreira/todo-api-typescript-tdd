import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  async handle(request: Request, response: Response) {
    const { name, email } = request.body;
    const user = await this.createUserService.execute({ name, email });

    return response.json(user);
  }
}

export { CreateUserController };
