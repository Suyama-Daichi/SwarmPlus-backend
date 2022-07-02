import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/service/prisma/prisma.service'
import { FoursquareService } from '../../libs/foursquare/src/foursquare.service'

@Injectable()
export class CheckinService {
  constructor(private prismaService: PrismaService, private foursquareService: FoursquareService) {}

  regist(checkin: unknown) {
    console.log(checkin)
  }

  async fetchCheckin(token: string) {
    return await this.foursquareService.fetchCheckins(token)
  }
}
