import { User } from 'src/modules/user/database/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    cart_id: number;
    @ManyToOne(()=>User)
    user:User;
}
