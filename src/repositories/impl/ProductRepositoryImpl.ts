import { Product } from '../../entity/Product';
import { IProductRepository } from '../IProductRepository';
import { getRepository } from 'typeorm';

export class ProductsRepositoryImpl implements IProductRepository {
  findAll(): Promise<Product[]> {
    const db = getRepository(Product);
    return db.find({ relations: ['user'] });
  }
  findByUserId(userId: number): Promise<Product[]> {
    const db = getRepository(Product);
    return db.find({ where: { user: { id: userId } }, relations: ['user'] });
  }
  save(product: Product): Promise<Product> {
    const db = getRepository(Product);
    return db.save(product);
  }
  async edit(id: number, product: Product): Promise<Product> {
    const db = getRepository(Product);
    let productExists = await db.findOne(id);

    productExists = { ...productExists, ...product };

    return db.save(productExists);
  }
}
