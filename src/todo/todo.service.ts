import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, TodoStatus } from '@prisma/client';

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
    return  this.databaseService.todo.create({data});
  }catch(err){
      return err
  }
    
  }

  async findAll(userEmail: string) {
    return  this.databaseService.todo.findMany({
      where :{
        userEmail : userEmail
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.todo.findFirst({
      where :{
        id : id
      }
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.todo.update({
      where: {
        id: id,
      },
      data :{
        ...updateTodoDto,
        status: 'completed' as TodoStatus,
      }
      
    });
  }
  

  async remove(id: number) {
    return this.databaseService.todo.delete({
      where :{
        id :id
      }
    });
  }
}
