import { IsDate, IsNumber, IsString } from 'class-validator'

export class CheckinDTO {
  @IsString() id: string
  @IsString() venue_id: string
  shout: string
  is_mayor: boolean
  @IsDate() created_at: Date
  venue: VenueDTO
}

export class VenueDTO {
  @IsString() id: string
  @IsString() name: string
  location: LocationDTO
}

export class LocationDTO {
  @IsString() venue_id: string
  @IsString() address: string
  @IsString() city: string
  @IsString() state: string
  @IsString() country: string
  @IsNumber() lat: bigint
  @IsNumber() lng: bigint
}
