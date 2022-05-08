import { Request, Response } from 'express';
import ListProductCase from './ListProductCase';

class ListProductController {
  constructor(private listProductCase: ListProductCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await this.listProductCase.execute();
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default ListProductController;
