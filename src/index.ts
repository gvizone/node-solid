import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import userRoutes from './routes/user';
import connectionOptions from './config/connection';
import productRoutes from './routes/product';

createConnection(connectionOptions)
  .then((connection) => {
    const port = 3000;
    const app = express();
    app.use(express.json());
    app.use('/user', userRoutes);
    app.use('/product', productRoutes);

    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch((err) => console.error(err));
