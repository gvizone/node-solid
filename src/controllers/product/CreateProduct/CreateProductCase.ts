import { Product } from '../../../entity/Product';
import { IProductRepository } from '../../../repositories/IProductRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { CreateProductDTO } from './CreateProductDTO';

export class CreateProductCase {
  constructor(
    private productsRepository: IProductRepository,
    private userRespository: IUsersRepository
  ) {}

  async execute(data: CreateProductDTO) {
    const user = await this.userRespository.findOne(data.userId);
    delete data.userId;
    const product = new Product({
      user,
      ...data,
    });
    console.log('>> creating product: ', product);
    await this.productsRepository.save(product);
  }
}
