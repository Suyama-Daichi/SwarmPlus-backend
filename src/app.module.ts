import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './prisma/prisma.service'
import { CheckinController } from './checkin/checkin.controller'
import { CheckinService } from './checkin/checkin.service'

@Module({
  imports: [],
  controllers: [CheckinController],
  providers: [AppService, PrismaService, CheckinService],
})
export class AppModule {}
