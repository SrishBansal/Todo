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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(dataservice, jwtservice) {
        this.dataservice = dataservice;
        this.jwtservice = jwtservice;
    }
    async login(loginData) {
        const { email, password } = loginData;
        console.log(email);
        console.log(password);
        const user = await this.dataservice.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new common_1.NotFoundException("No user exists with the entered email");
        }
        console.log(user);
        const validatePassword = await bcrypt.compare(password, user.password);
        if (!validatePassword) {
            throw new common_1.NotFoundException("Wrong Password");
        }
        console.log(this.jwtservice.sign({ email }));
        return {
            token: this.jwtservice.sign({ email })
        };
    }
    async register(registerData) {
        const user = await this.dataservice.user.findFirst({
            where: {
                email: registerData.email
            }
        });
        if (user) {
            throw new common_1.BadGatewayException('User with this email already exists');
        }
        registerData.password = await bcrypt.hash(registerData.password, 10);
        const res = await this.dataservice.user.create({ data: registerData });
        return res;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map