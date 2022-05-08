import { Product } from '../entity/Product';
export interface IProductRepository {
  findAll(): Promise<Product[]>;
  findByUserId(userId: number): Promise<Product[]>;
  save(product: Product): Promise<Product>;
  edit(id: number, product: Product): Promise<Product>;
}
