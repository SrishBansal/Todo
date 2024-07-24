import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator"

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @Length(2,20)
    password: string
    @IsNotEmpty()
    @IsString()
    email: string
}