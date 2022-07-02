import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'

@Injectable()
export class FoursquareService {
  constructor(private httpService: HttpService) {}
  async fetchCheckins(token: string) {
    const checkins = await this.httpService.axiosRef
      .get('users/self/checkins', {
        params: { oauth_token: token, v: '20220101' },
      })
      .then((t) => t.data)
    return checkins
  }
}
