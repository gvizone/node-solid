import { ProductsRepositoryImpl } from '../../../repositories/impl/ProductRepositoryImpl';
import ListProductCase from './ListProductCase';
import ListProductController from './ListProductController';

const productRepositoryImpl = new ProductsRepositoryImpl();
const listProductCase = new ListProductCase(productRepositoryImpl);
const listProductController = new ListProductController(listProductCase);

export { listProductController };
