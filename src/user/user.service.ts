import { Injectable } from '@nestjs/common'
import { CreateUserDTO, UpdateUserDTO } from 'src/user/user.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  /** 単一のユーザーレコードを取得 */
  getUser(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } })
  }

  /** ユーザーレコードを作成する */
  async postUser(user: CreateUserDTO) {
    return this.prisma.user.create({
      data: {
        auth_uid: user.uid,
        exponent_push_token: user.exponent_push_token,
      },
    })
  }

  /** ユーザーレコードを更新する */
  async updateUser(uid: string, user: UpdateUserDTO) {
    return this.prisma.user.update({
      where: { auth_uid: uid },
      data: user,
    })
  }
}
