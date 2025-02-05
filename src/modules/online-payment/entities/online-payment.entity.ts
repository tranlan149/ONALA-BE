import { Order } from 'src/modules/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()

export class OnlinePayment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Order)
    order: Order;

    @Column()
    source_account: string;

    @Column()
    destination_account: string;

    @Column()
    transaction_id: string;

    @Column('decimal')
    amount: number;

    @Column()
    transaction_date: Date;

    @Column()
    transaction_status: string;

    @Column()
    payment_note: string;

}
