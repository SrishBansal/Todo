import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.gard';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UserGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @UserGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @UserGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @UserGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @UserGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
function UserGuards(JwtAuthGuard: typeof JwtAuthGuard): (target: TodoController, propertyKey: "findOne", descriptor: TypedPropertyDescriptor<(id: string) => Promise<{ id: number; task: string; description: string | null; status: import(".prisma/client").$Enums.TodoStatus; createdAt: Date; updatedAt: Date; }>>) => void | TypedPropertyDescriptor<...> {
  throw new Error('Function not implemented.');
}

