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
      const categories = venue.categories

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
                categories: {
                  connectOrCreate: {
                    where: { id: categories[0].id },
                    create: {
                      id: categories[0].id,
                      name: categories[0].name,
                      icon: categories[0].icon.prefix + '44' + categories[0].icon.suffix,
                    },
                  },
                },
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
                categories: {
                  connectOrCreate: {
                    where: { id: categories[0].id },
                    create: {
                      id: categories[0].id,
                      name: categories[0].name,
                      icon: categories[0].icon.prefix + '44' + categories[0].icon.suffix,
                    },
                  },
                },
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
