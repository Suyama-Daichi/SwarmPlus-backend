import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma/prisma.service'

@Injectable()
export class CheckinService {
  constructor(private prismaService: PrismaService) {}

  regist(token: string) {
    console.log(token)
  }
}
