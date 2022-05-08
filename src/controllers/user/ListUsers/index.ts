import { UsersRepositoryImpl } from '../../../repositories/impl/UsersRepositoryImpl';
import ListUserCase from './ListUserCase';
import ListUserController from './ListUserController';

const usersRepositoryImpl = new UsersRepositoryImpl();
const listUserCase = new ListUserCase(usersRepositoryImpl);
const listUserController = new ListUserController(listUserCase);

export { listUserController };
