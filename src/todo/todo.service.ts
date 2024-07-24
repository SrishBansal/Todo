import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  update(arg0: number, updateTodoDto: UpdateTodoDto) {
    throw new Error('Method not implemented.');
  }
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
  }catch(err){
      return err
  }
    
  }

  async findAll() {
    return await this.databaseService.todo.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.todo.update({
      where:{
        id:id
      },
      data: updateTodoDto
    });
  }

  remove(id: number) {
    return this.databaseService.todo.delete({
      where :{
        id :id
      }
    });
  }
}
