import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { TopResponse } from '@suyama-daichi/fouresquare-types'

@Injectable()
export class FoursquareService {
  constructor(private httpService: HttpService) {}
  async fetchCheckins(token: string) {
    const checkins = await this.httpService.axiosRef
      .get<TopResponse>('users/self/checkins', {
        params: { oauth_token: token, v: '20220101' },
      })
      .then((t) => t.data.response.checkins)
    return checkins
  }
}
