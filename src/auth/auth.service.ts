import { BadGatewayException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import { register } from 'module';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataservice: DatabaseService
  ){}
  }

  async login()

  async register(registerData: RegisterUserDto){
    const user = await this.dataservice.user.findFirst({
      where :{
        email: registerData.email
      }
    })
    if(user){
      throw new BadGatewayException('User with this email already exists')
    }
    registerData.password = await bcrypt.hash(reisterData.password, 10)
    const res = await this.databaseService.user.create({data : registerData})
    return res;
  }
}
