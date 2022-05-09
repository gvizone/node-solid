import { User } from '../../entity/User';
import { IUsersRepository } from '../IUsersRepository';
import { getRepository } from 'typeorm';

export class UsersRepositoryImpl implements IUsersRepository {
  findAll(): Promise<User[]> {
    const db = getRepository(User);
    return db.find();
  }
  findOne(id: number): Promise<User> {
    const db = getRepository(User);
    return db.findOne(id);
  }
  save(user: User): Promise<User> {
    const db = getRepository(User);
    return db.save(user);
  }
  async edit(id: number, user: User): Promise<User> {
    const db = getRepository(User);
    let userExists = await db.findOne(id);
    userExists = { ...userExists, ...user };
    return db.save(userExists);
  }
}
