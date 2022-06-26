import { Injectable } from '@nestjs/common'
import { Checkin, Location, Venue } from '@prisma/client'
import { CheckinDTO } from 'src/checkin/checkin.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CheckinService {
  constructor(private prismaService: PrismaService) {}

  async addCheckin(checikns: CheckinDTO[]) {
    checikns.map(async (checkinObj) => {
      const checkin: Checkin = {
        id: checkinObj.id,
        venue_id: checkinObj.venue_id,
        shout: checkinObj.shout,
        is_mayor: checkinObj.is_mayor,
        created_at: checkinObj.created_at,
      }

      const venue: Omit<Venue, 'location_id'> = {
        id: checkinObj.venue.id,
        name: checkinObj.venue.name,
      }

      const location: Omit<Location, 'id'> = {
        address: checkinObj.venue.location.address,
        city: checkinObj.venue.location.city,
        state: checkinObj.venue.location.state,
        country: checkinObj.venue.location.country,
        lat: checkinObj.venue.location.lat,
        lng: checkinObj.venue.location.lng,
      }

      const createdLocation = await this.prismaService.location.create({ data: location })

      await this.prismaService.venue.create({
        data: { ...venue, location_id: createdLocation.id },
      })

      this.prismaService.checkin.create({
        data: { ...checkin },
      })
    })
  }
}
