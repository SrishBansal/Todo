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
exports.UpdateTodoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_todo_dto_1 = require("./create-todo.dto");
const class_validator_1 = require("class-validator");
class UpdateTodoDto extends (0, mapped_types_1.PartialType)(create_todo_dto_1.CreateTodoDto) {
}
exports.UpdateTodoDto = UpdateTodoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTodoDto.prototype, "status", void 0);
var Todotatus;
(function (Todotatus) {
    Todotatus["ACTIVE"] = "ACTIVE";
    Todotatus["DONE"] = "DONE";
})(Todotatus || (Todotatus = {}));
//# sourceMappingURL=update-todo.dto.js.map