import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
//import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './auth.gard';
import {ApiOperation, ApiTags} from '@nestjs/swagger'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)

  @Post()
  @ApiOperation({description: "To register a new user with email.", summary:"Register a User with details."})
  create(@Body() registerData: RegisterUserDto) {
    return this.authService.register(registerData);
  }

  @Get()
  @ApiOperation({description: "TLogin with email.", summary:"Endpoint to login with Email and Password."})
  login(@Body() loginData: LoginDto){
    return this.authService.login(loginData)
  }
}
