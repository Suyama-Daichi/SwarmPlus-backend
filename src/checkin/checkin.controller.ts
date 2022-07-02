import { Body, Controller, Post } from '@nestjs/common'
import { CheckinService } from 'src/checkin/checkin.service'

@Controller('checkin')
export class CheckinController {
  constructor(private checkinService: CheckinService) {}

  @Post('regist')
  async regist(@Body() body: { token: string }) {
    const checkin = await this.checkinService.fetchCheckin(body.token)
    const result = await this.checkinService.regist(checkin)
  }
}
