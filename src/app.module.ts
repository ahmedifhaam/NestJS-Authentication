import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { UserService } from './user/user.service';
import { FirebaseuserService } from './user/firebaseuser/firebaseuser.service';
import { UserController } from './user/user.controller';
import {IUserService} from 'src/user/iuser-service.interface'

@Module({
  imports: [BooksModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, {provide:IUserService,useClass:FirebaseuserService}],
})
export class AppModule {}
