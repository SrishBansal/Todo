import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @IsOptional()
    status : string
}

enum Todotatus {
    ACTIVE = 'ACTIVE',
    DONE = 'DONE'
}