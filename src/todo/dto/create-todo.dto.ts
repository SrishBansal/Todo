import { User } from "@prisma/client"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {

    @IsNotEmpty()
    @IsString()
    task : string

    @IsOptional()
    @IsString()
    description? : string
}
