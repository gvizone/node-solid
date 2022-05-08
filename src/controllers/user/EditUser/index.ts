import { UsersRepositoryImpl } from '../../../repositories/impl/UsersRepositoryImpl';
import EditUserCase from './EditUserCase';
import EditUserController from './EditUserController';

const usersRepositoryImpl = new UsersRepositoryImpl();
const editUserCase = new EditUserCase(usersRepositoryImpl);
const editUserController = new EditUserController(editUserCase);

export { editUserController };
