import { category } from 'src/modules/category/entities/category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    food_id: number;

    @Column()
    name: string;

    @Column('decimal')
    price: number;
    @Column()
    image_url: string;
    @ManyToOne(()=>category)
    category:category;
    @Column()
    status:string;
}
