import { Injectable } from '@nestjs/common';

import { IUserService } from './iuser-service.interface';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';

@Injectable()
export class UserService{



  addUser(user: CreateUser): boolean {
    throw new Error("Method not implemented.");
  }

  removeUser(userId: string): boolean {
    throw new Error("Method not implemented.");
  }
  updateuser(user: UpdateUser): boolean {
    throw new Error("Method not implemented.");
  }



}
