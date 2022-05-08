import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  link: string;

  @ManyToOne(() => User, (user) => user.products)
  user: User;

  constructor(props: Omit<Product, 'id' | 'products'>) {
    Object.assign(this, props);
  }
}
