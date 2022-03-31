import { IUser } from '../models/IUser';

class User implements IUser {
  id?: string;
  name: string;
  email: string;
  created_at?: Date;

  private constructor({ name, email }: User) {
    return Object.assign(this, {
      name,
      email,
    });
  }

  static create({ name, email }: User) {
    const user = new User({ name, email });
    return user;
  }
}
export { User };
