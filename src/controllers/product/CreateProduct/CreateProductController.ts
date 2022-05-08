import { Request, Response } from 'express';
import { CreateProductCase } from './CreateProductCase';

export class CreateProductController {
  constructor(private createProductCase: CreateProductCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { name, price, link, userId } = req.body;
    try {
      await this.createProductCase.execute({
        name,
        price,
        link,
        userId,
      });
      return res.status(201).send();
    } catch (err) {
      console.log(err);

      return res.status(400).json({
        details: err.message,
      });
    }
  };
}
