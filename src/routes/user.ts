import { Router } from 'express';
import { createUserController } from '../controllers/user/CreateUser';
import { editUserController } from '../controllers/user/EditUser';
import { listUserController } from '../controllers/user/ListUsers';

const userRoutes = Router();

userRoutes.get('/', listUserController.handle);
userRoutes.post('/', createUserController.handle);
userRoutes.put('/:id', editUserController.handle);

export default userRoutes;
