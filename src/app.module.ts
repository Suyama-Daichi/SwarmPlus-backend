import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './service/prisma/prisma.service'

@Module({
  imports: [],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule {}
