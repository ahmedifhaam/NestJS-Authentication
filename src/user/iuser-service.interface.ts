import { CreateUser } from "./dto/create-user.dto";
import { UpdateUser } from "./dto/update-user.dto";


export abstract class IUserService {
    abstract getUser(uuid):Promise<any>;
    abstract addUser(user:CreateUser):Promise<any>;
    abstract removeUser(userId:string):Promise<any>;
    abstract updateuser(user:UpdateUser):Promise<any>;

}
