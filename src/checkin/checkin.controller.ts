import { Body, Controller, Post } from '@nestjs/common'
import { CheckinDTO } from 'src/checkin/checkin.dto'

@Controller('checkin')
export class CheckinController {
  @Post()
  addCheckin(@Body() body: CheckinDTO[]) {}
}
