import { Order } from 'src/modules/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class CashOnDelivery {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Order)
    order: Order;

    @Column()
    address: string;

    @Column()
    phone_number: string;

    @Column()
    status: string;

    @Column()
    delivery_time: Date;

}
