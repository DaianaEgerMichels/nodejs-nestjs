import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductFeature } from './product-feature.entity';
import { ProductImage } from './product-image.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', length: 100, nullable: false })
  userId: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'value', nullable: false })
  value: number;

  @Column({ name: 'quantity_available', nullable: false })
  quantityAvailable: number;

  @Column({ name: 'description', length: 1000, nullable: false })
  description: string;

  characteristics: ProductFeature[];

  images: ProductImage[];

  @Column({ name: 'category', length: 100, nullable: false })
  category: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
