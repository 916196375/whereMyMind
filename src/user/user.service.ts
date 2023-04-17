/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 16:43:14
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 17:19:01
 * @FilePath: /where-my-mind/src/user/user.service.ts
 * @Description: 用户服务
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string): Promise<User> {
    const user = await this.UserRepository.findOne({ where: { username: username } })
    // 用户未找到，抛出异常
    // if (!user) throw new HttpException('用户未找到！', HttpStatus.BAD_REQUEST)
    return user;
  }


  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
