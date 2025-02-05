import { User } from 'src/modules/user/database/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    order_id:number;
    @ManyToOne(()=>User)
    user:User;
    @Column()
    order_date:Date;
    @Column('decimal')
    total_price:number;
    @Column()
    status: string;


}
