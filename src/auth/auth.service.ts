/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 17:00:23
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 17:36:48
 * @FilePath: /where-my-mind/src/auth/auth.service.ts
 * @Description: 身份校验
 */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username)
        if (user && user.password === password) {
            const { password, ...rest } = user
            return rest
        }
        return null
    }

    async login(user: Omit<User, 'password'>) {
        const payload = { username: user.username, sub: user.uid }
        return { token: this.jwtService.sign(payload) }
    }
}
