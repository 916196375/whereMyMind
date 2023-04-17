/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 16:30:25
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 16:31:47
 * @FilePath: /where-my-mind/src/const.ts
 * @Description: 全局常量
 */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// 数据库配置
export const dataBaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '139.155.5.202',
    port: 3306,
    username: 'whereMyMindDev',
    password: 'XwshPj3H7DkHbjHB',
    database: 'wheremyminddev',
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
}