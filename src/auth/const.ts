/*
 * @Author: liuhongbo liuhongbo@dip-ai.com
 * @Date: 2023-04-17 17:37:55
 * @LastEditors: liuhongbo liuhongbo@dip-ai.com
 * @LastEditTime: 2023-04-17 17:40:20
 * @FilePath: /where-my-mind/src/auth/const.ts
 * @Description: 
 */

export const jwtConfig = {
    secret: 'where.my&mind*secret+key',
    signOptions: { expiresIn: `${8 * 60 * 60}s` },
}