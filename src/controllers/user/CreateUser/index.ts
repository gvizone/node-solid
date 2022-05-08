import { UsersRepositoryImpl } from '../../../repositories/impl/UsersRepositoryImpl';
import { CreateUserCase } from './CreateUserCase';
import { CreateUserController } from './CreateUserController';

const usersRepositoryImpl = new UsersRepositoryImpl();
const createUserCase = new CreateUserCase(usersRepositoryImpl);

const createUserController = new CreateUserController(createUserCase);

export { createUserController };
