import { Request, Response } from 'express';
import ListProductByUserCase from './ListProductByUserCase';

class ListProductByUserController {
  constructor(private listProductCase: ListProductByUserCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const userId = parseInt(req.params.userId);
      const products = await this.listProductCase.execute(userId);
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default ListProductByUserController;
