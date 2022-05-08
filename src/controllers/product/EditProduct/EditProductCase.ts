import { Product } from '../../../entity/Product';
import { IProductRepository } from '../../../repositories/IProductRepository';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { EditProductDTO } from './EditProductDTO';

class EditProductCase {
  constructor(
    private productRepository: IProductRepository,
    private userRespository: IUsersRepository
  ) {}
  async execute(id: number, data: EditProductDTO) {
    const user = await this.userRespository.findOne(data.userId);
    const product = new Product({
      user,
      ...data,
    });
    await this.productRepository.edit(id, product);
  }
}

export default EditProductCase;
