import { Module } from '@nestjs/common'
import { FoursquareService } from './foursquare.service'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.foursquare.com/v2/',
      maxRedirects: 2,
      timeout: 5000,
    }),
  ],
  providers: [FoursquareService],
  exports: [FoursquareService],
})
export class FoursquareModule {}
