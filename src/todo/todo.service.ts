import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService){}
  async create(createTodoDto: CreateTodoDto) {
    try {
    let data: Prisma.TodoCreateInput = 
    {
      description : createTodoDto.description ,
      task : createTodoDto.task ,
      status : 'ACTIVE'
    }
    console.log(data)

    return await this.databaseService.todo.create({data});
    }catch(err)
    {
      return err
    }
    
  }

  async findAll() {
    return await this.databaseService.todo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
