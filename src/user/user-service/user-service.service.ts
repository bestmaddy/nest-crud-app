import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
@Injectable()
export class UserServiceService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>,) { }

    async findAll(): Promise<User[]> {
        return await this.repository.find();
    }

    async create(user: User): Promise<User> {
        return await this.repository.save(user);
    }

    async update(user: User): Promise<UpdateResult> {
        return await this.repository.update(user.idUser, user);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }

}
