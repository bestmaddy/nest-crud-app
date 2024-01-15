import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from '../user-service/user-service.service';
import { User } from './user.entity';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
@Controller('user')
export class UserController {
    constructor(private userService: UserServiceService) { }

    @Get()
    index(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post('create')
    async create(@Body() userData: User): Promise<any> {
      return this.userService.create(userData);
    }  

    @Put(':id/update')
    async update(@Param('id') idUser, @Body() userData: User): Promise<any> {
        userData.idUser = Number(idUser);
        console.log('Update #' + userData.idUser)
        return this.userService.update(userData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      console.log('Delete #' + id)
      return this.userService.delete(id);
    }  
}
