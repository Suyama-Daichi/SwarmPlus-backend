import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { UserController } from './user/user.controller'
import { PrismaService } from './prisma/prisma.service'
import { UserService } from './user/user.service'

@Module({
  imports: [],
  controllers: [UserController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
