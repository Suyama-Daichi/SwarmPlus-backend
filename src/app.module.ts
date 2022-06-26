import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { UserController } from './user/user.controller'
import { PrismaService } from './prisma/prisma.service'
import { UserService } from './user/user.service'
import { CheckinController } from './checkin/checkin.controller';
import { CheckinService } from './checkin/checkin.service';

@Module({
  imports: [],
  controllers: [UserController, CheckinController],
  providers: [AppService, PrismaService, UserService, CheckinService],
})
export class AppModule {}
