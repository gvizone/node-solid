import { IProductRepository } from '../../../repositories/IProductRepository';

class ListProductCase {
  constructor(private readonly productRepository: IProductRepository) {}
  async execute() {
    return await this.productRepository.findAll();
  }
}

export default ListProductCase;
