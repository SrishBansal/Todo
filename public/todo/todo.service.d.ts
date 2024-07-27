import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
export declare class TodoService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createTodoDto: CreateTodoDto, email: string): Promise<any>;
    findAll(userEmail: string): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    update(id: number, updateTodoDto: UpdateTodoDto): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        task: string;
        description: string | null;
        status: import(".prisma/client").$Enums.TodoStatus;
        createdAt: Date;
        updatedAt: Date;
        userEmail: string | null;
    }>;
}
