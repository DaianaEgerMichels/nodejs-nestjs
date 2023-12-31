import { Column, Entity } from 'typeorm';

@Entity({ name: 'product_images' })
export class ProductImage {
  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'description', length: 1000, nullable: false })
  description: string;
}
