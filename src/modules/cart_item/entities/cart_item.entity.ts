import { Cart } from 'src/modules/cart/entities/cart.entity';
import { Food } from 'src/modules/food/entities/food.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()

export class CartItem {
    @PrimaryGeneratedColumn()
    cart_detail_id: number;
    @ManyToOne(()=>Cart)
    cart:Cart;
    @ManyToOne(()=>Food)
    food:Food;
    @Column()
    quantity: number;
}
