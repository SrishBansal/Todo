import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import  {Strategy} from "passport-jwt"
import { DatabaseService } from "src/database/database.service";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor(
       private readonly.private.databaseService: DatabaseService
    ){
        super{
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            ignoreExpiration : false,
            secretOrKey: "Secret"
        }
    }
    async validate(payload : {userEmail:string}){
        cons user = await this.databaseService.user.findUnique{
            where :{
                email:payload.userEmail,
            },
        }
        return user 
    }
}
