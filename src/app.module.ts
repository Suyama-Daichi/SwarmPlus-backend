import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './service/prisma/prisma.service'
import { CheckinController } from './checkin/checkin.controller'
import { CheckinService } from './checkin/checkin.service'
import { FoursquareModule } from 'foursquare/foursquare'

@Module({
  imports: [FoursquareModule],
  controllers: [CheckinController],
  providers: [AppService, PrismaService, CheckinService],
})
export class AppModule {}
