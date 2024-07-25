import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, TodoStatus } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createTodoDto: CreateTodoDto, email: string) {
    try {
      const user = await this.databaseService.user.findUnique({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }
      let data: Prisma.TodoCreateInput = {
        description: createTodoDto.description,
        task: createTodoDto.task,
        status: 'ACTIVE',
        user: {
          connect: { email: user.email },
        },
      };
      return this.databaseService.todo.create({ data });
    } catch (err) {
      return err; 
    }
  }

  async findAll(userEmail: string) {
    return this.databaseService.todo.findMany({
      where: {
        user: { email: userEmail }, // corrected the filter
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.todo.findUnique({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.todo.update({
      where: { id },
      data: {
        ...updateTodoDto,
        status: 'COMPLETED' as TodoStatus, // corrected the status
      },
    });
  }

  async remove(id: number) {
    return this.databaseService.todo.delete({ where: { id } });
  }
}