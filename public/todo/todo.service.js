"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let TodoService = class TodoService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async create(createTodoDto, email) {
        try {
            const user = await this.databaseService.user.findUnique({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }
            let data = {
                description: createTodoDto.description,
                task: createTodoDto.task,
                status: 'ACTIVE',
                user: {
                    connect: { email: user.email },
                },
            };
            return this.databaseService.todo.create({ data });
        }
        catch (err) {
            return err;
        }
    }
    async findAll(userEmail) {
        return this.databaseService.todo.findMany({
            where: {
                user: { email: userEmail },
            },
        });
    }
    async findOne(id) {
        return this.databaseService.todo.findUnique({ where: { id } });
    }
    async update(id, updateTodoDto) {
        return this.databaseService.todo.update({
            where: { id },
            data: {
                ...updateTodoDto,
                status: 'COMPLETED',
            },
        });
    }
    async remove(id) {
        return this.databaseService.todo.delete({ where: { id } });
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], TodoService);
//# sourceMappingURL=todo.service.js.map