import { Body, Controller, Post } from '@nestjs/common'
import { CheckinService } from 'src/checkin/checkin.service'

@Controller('checkin')
export class CheckinController {
  constructor(private checkinService: CheckinService) {}

  @Post('regist')
  regist(@Body() body: { token: string }) {
    this.checkinService.regist(body.token)
  }
}
