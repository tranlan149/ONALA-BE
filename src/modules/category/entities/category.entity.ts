import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
@Entity()
export class category{
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
