/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 16:43:14
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 16:44:24
 * @FilePath: /where-my-mind/src/user/user.module.ts
 * @Description: user module
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule { }
