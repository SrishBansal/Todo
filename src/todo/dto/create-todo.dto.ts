import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { User } from "@prisma/client"
import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateTodoDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    task : string

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description? : string
}
