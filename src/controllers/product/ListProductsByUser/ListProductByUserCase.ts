import { IProductRepository } from '../../../repositories/IProductRepository';

class ListProductByUserCase {
  constructor(private productRepository: IProductRepository) {}
  async execute(userId: number) {
    return await this.productRepository.findByUserId(userId);
  }
}

export default ListProductByUserCase;
