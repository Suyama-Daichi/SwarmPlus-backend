import { Injectable } from '@nestjs/common'
import { CheckinSummary } from '@suyama-daichi/fouresquare-types'
import { PrismaService } from 'src/service/prisma/prisma.service'
import { FoursquareService } from '../../libs/foursquare/src/foursquare.service'

@Injectable()
export class CheckinService {
  constructor(private prismaService: PrismaService, private foursquareService: FoursquareService) {}

  async regist(checkin: CheckinSummary, userId: string) {
    const mapAsync = checkin.items.map(async (checkin) => {
      const { venue } = checkin
      const { location } = venue

      const checkinTran = this.prismaService.checkin.upsert({
        where: { id: checkin.id },
        update: {
          shout: checkin.shout,
          is_mayor: checkin.isMayor,
          created_at: new Date(checkin.createdAt * 1000),
          user: { connectOrCreate: { where: { id: userId }, create: { id: userId } } },
          venue: {
            connectOrCreate: {
              where: { id: venue.id },
              create: {
                id: venue.id,
                name: venue.name,
                address: location.address,
                city: location.city,
                state: location.state,
                country: location.country,
                lat: location.lat,
                lng: location.lng,
              },
            },
          },
        },
        create: {
          id: checkin.id,
          shout: checkin.shout,
          is_mayor: checkin.isMayor,
          created_at: new Date(checkin.createdAt * 1000),
          user: { connectOrCreate: { where: { id: userId }, create: { id: userId } } },
          venue: {
            connectOrCreate: {
              where: { id: venue.id },
              create: {
                id: venue.id,
                name: venue.name,
                address: location.address,
                city: location.city,
                state: location.state,
                country: location.country,
                lat: location.lat,
                lng: location.lng,
              },
            },
          },
        },
      })

      this.prismaService.$transaction([checkinTran])
    })

    const result = await Promise.all(mapAsync)
    console.log(result)
  }

  async fetchCheckin(token: string) {
    const checkinSummary = await this.foursquareService.fetchCheckins(token)
    return checkinSummary
  }
}
