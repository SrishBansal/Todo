import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterUserDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import { register } from 'module';
import * as bcrypt from 'bcrypt';
import {LoginDto} from './dto/login.dto'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly dataservice: DatabaseService,
    private readonly jwtservice: JwtService
  ){}
  }

  async login(loginData : LoginDto){
    const {email,password} = loginData;
    const user =await this.datatservice.user.findFirst({
      where:{
        email:email
      }
    })
    if(!user){
      throw new NotFoundException("No user exists with the entered email")
    }
    const validatePassword = await bcrypt.compare(password, user.password)
    if(!validatePassword){
      throw new NotFoundException("Wrong Password")
    }
    return {
      token : this.jwtservice.sign({email})
    }
  }

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
