import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtAuthGuard } from 'src/auth/auth.gard'; 
import { UserEmail } from 'src/common/decorator/user-email.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(JwtAuthGuard) 
  @ApiOperation({description: "To add a new Todo.", summary:"Start new todo."})
  @Post()
  async create(@Body() createTodoDto: CreateTodoDto, @UserEmail()
  userEmail: string) {
    console.log("output")
    return await this.todoService.create(createTodoDto, userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description: "To get all user task.", summary:"Get user task"})
  async findAll(@UserEmail()
userEmail: string) {
    console.log(userEmail)
    return this.todoService.findAll(userEmail);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({description: "To get specific user task.", summary:"Get specific task"})
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ id: number; task: string; description: string | null; status: import(".prisma/client").$Enums.TodoStatus; createdAt: Date; updatedAt: Date; }> {
    return this.todoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiOperation({description: "To update specific user task.", summary:"update user task"})
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({description: "To delete  user task.", summary:"Delete user task"})
  async remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}

