import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.gard'; 
import { UserEmail } from 'src/common/decorator/user-email.decorator';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard) 
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto, @UserEmail()
  userEmail: string) {
    console.log("output")
    return await this.todoService.create(createTodoDto, userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@UserEmail()
userEmail: string) {
    console.log(userEmail)
    return this.todoService.findAll(userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ id: number; task: string; description: string | null; status: import(".prisma/client").$Enums.TodoStatus; createdAt: Date; updatedAt: Date; }> {
    return this.todoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}

