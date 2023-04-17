/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 17:01:35
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 17:06:02
 * @FilePath: /where-my-mind/src/auth/local.strategy.ts
 * @Description: 本地验证策略
 */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super()
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
}