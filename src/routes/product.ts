import { Router } from 'express';
import { createProductController } from '../controllers/product/CreateProduct';
import { editProductController } from '../controllers/product/EditProduct';
import { listProductController } from '../controllers/product/ListProducts';
import { listProductByUserController } from '../controllers/product/ListProductsByUser';

const productRoutes = Router();

productRoutes.get('/', listProductController.handle);
productRoutes.get('/user/:userId', listProductByUserController.handle);
productRoutes.post('/', createProductController.handle);
productRoutes.delete(':id', () => 'A definir');
productRoutes.put('/:id', editProductController.handle);

export default productRoutes;
