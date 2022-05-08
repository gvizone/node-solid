import { Request, Response } from 'express';
import EditProductCase from './EditProductCase';

class EditProductController {
  constructor(private editProductCase: EditProductCase) {}
  handle = async (req: Request, res: Response): Promise<Response> => {
    const { name, price, link, userId } = req.body;
    const id = Number(req.params.id);

    try {
      await this.editProductCase.execute(id, {
        name,
        price,
        link,
        userId,
      });
      return res.status(201).json({ id, ...req.body });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
export default EditProductController;
