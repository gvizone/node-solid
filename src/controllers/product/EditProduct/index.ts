import { ProductsRepositoryImpl } from '../../../repositories/impl/ProductRepositoryImpl';
import { UsersRepositoryImpl } from '../../../repositories/impl/UsersRepositoryImpl';
import EditProductCase from './EditProductCase';
import EditProductController from './EditProductController';

const productRepositoryImpl = new ProductsRepositoryImpl();
const usersRepositoryImpl = new UsersRepositoryImpl();
const editProductCase = new EditProductCase(
  productRepositoryImpl,
  usersRepositoryImpl
);
const editProductController = new EditProductController(editProductCase);

export { editProductController };
