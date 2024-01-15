import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({ nullable: true, default: null })
    Email: string;

    @Column({ nullable: true, default: null })
    Password: string;

    @Column({ nullable: true, default: null })
    UserName: string;

    @Column({ nullable: true, default: null })
    MobileNumber: string;

    @Column({ nullable: true, default: null })
    Address: string;

}