import { ProductsRepositoryImpl } from '../../../repositories/impl/ProductRepositoryImpl';
import { UsersRepositoryImpl } from '../../../repositories/impl/UsersRepositoryImpl';
import { CreateProductCase } from './CreateProductCase';
import { CreateProductController } from './CreateProductController';

const usersRepositoryImpl = new UsersRepositoryImpl();
const productsRepositoryImpl = new ProductsRepositoryImpl();
const createProductCase = new CreateProductCase(
  productsRepositoryImpl,
  usersRepositoryImpl
);

const createProductController = new CreateProductController(createProductCase);

export { createProductController };
