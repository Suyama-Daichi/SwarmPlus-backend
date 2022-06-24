import { IsString } from 'class-validator'

/** ユーザー作成のBody型 */
export class CreateUserDTO {
  /** 認証サービスで払い出されたUID */
  @IsString() uid: string
  /** プッシュ通知トークン */
  @IsString() exponent_push_token: string
}

export class UpdateUserDTO {
  /** 認証サービスで払い出されたUID */
  @IsString() auth_uid?: string
  /** プッシュ通知トークン */
  @IsString() exponent_push_token?: string
}
