import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(registerData: RegisterUserDto): Promise<{
        id: number;
        email: string;
        password: string;
        name: string;
    }>;
    login(loginData: LoginDto): Promise<{
        token: string;
    }>;
}
