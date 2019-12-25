import { Injectable } from '@nestjs/common';
import { IUserService } from '../iuser-service.interface';
import { CreateUser } from '../dto/create-user.dto';
import { UpdateUser } from '../dto/update-user.dto';

import * as admin from 'firebase-admin';
import { resolve } from 'url';

@Injectable()
export class FirebaseuserService implements IUserService{
  app:any;

  constructor(){
    this.app = admin.initializeApp({
      credential:admin.credential.cert('/Users/xelvias/Documents/firebaseAuthKey/authentication-d37ae-firebase-adminsdk-k9og8-3a58bb71d7.json'),
      databaseURL:'https://authentication-d37ae.firebaseio.com'
    })
  }

  getUser(uuid): Promise<any> {
    return new Promise(resolve=>{
      console.log('Firebase Service looking for user ? ',uuid)
      admin.auth().getUser(uuid).then(user=>{
        resolve(user);
      })
      .catch(error=>{
        console.log(error);
        resolve(error);
      });
    });
  }

  addUser(user: CreateUser): Promise<any>{
    return new Promise(resolve=>{
        admin.auth().createUser({
        email:user.username,
        password:user.password
      }).then(function(userrecord){
        console.log('Successfully created new user:', userrecord.uid);
        resolve(userrecord.uid);
      }).catch(function(error){
        console.log('Failed ',error);
        resolve(error);
      });
    });
  }
  removeUser(userId: string): Promise<any> {
    return new Promise((resolve)=>{
      admin.auth().deleteUser(userId)
      .then(()=>{
        resolve("Successfully DeletedUser");
      })
      .catch(error=>{
        resolve(error);
      });
    });
  }
  updateuser(user: UpdateUser): Promise<any> {
    return new Promise(resolve=>{
        admin.auth().updateUser(user.id,{
          email:user.username,
          password:user.password
        })
        .then(user=>{
          resolve(user);
        })
        .catch(error=>{
          resolve(error);
        });
      })
    }



}
