import { ProductsRepositoryImpl } from '../../../repositories/impl/ProductRepositoryImpl';
import ListProductByUserCase from './ListProductByUserCase';
import ListProductByUserController from './ListProductByUserController';

const productRepositoryImpl = new ProductsRepositoryImpl();
const listProductByUserCase = new ListProductByUserCase(productRepositoryImpl);
const listProductByUserController = new ListProductByUserController(
  listProductByUserCase
);

export { listProductByUserController };
