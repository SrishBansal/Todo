import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly dataservice;
    private readonly jwtservice;
    constructor(dataservice: DatabaseService, jwtservice: JwtService);
    login(loginData: LoginDto): Promise<{
        token: string;
    }>;
    register(registerData: RegisterUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
    }>;
}
