import { Food } from 'src/modules/food/entities/food.entity';
import { Order } from 'src/modules/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()

export class OrderItem {
    @PrimaryGeneratedColumn()
    order_detail_id: number;

    @ManyToOne(() => Order)
    order: Order;

    @ManyToOne(() => Food)
    food: Food;

    @Column()
    quantity: number;

    @Column('decimal')
    price: number;
}
