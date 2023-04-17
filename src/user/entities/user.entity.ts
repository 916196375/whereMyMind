/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 16:43:14
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 16:55:32
 * @FilePath: /where-my-mind/src/user/entities/user.entity.ts
 * @Description: 用户表
 */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    uid: string

    @Column()
    username: string

    @Column()
    password: string
}
