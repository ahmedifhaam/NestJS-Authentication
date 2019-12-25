import { Controller, Get, Param, Delete, Body, Post, Put } from '@nestjs/common';
import { IUserService } from './iuser-service.interface';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService:IUserService){

  }

  @Get(':uuid')
  getUser(@Param('uuid') uuid){
    const user=  this.userService.getUser(uuid);
    return user;
  }

  @Delete(':uuid')
  removeUser(@Param('uuid') uuid){
    const resp = this.userService.removeUser(uuid);
    return resp;
  }

  @Post()
  addUser(@Body() createUser:CreateUser){
    const respo = this.userService.addUser(createUser);
    return respo;
  }

  @Put(':uuid')
  updateUser(@Param('uuid')uuid,@Body()updateUser:UpdateUser ){
    const user = this.userService.updateuser(updateUser);
    return user;
  }
}
