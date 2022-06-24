import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Request } from 'express'
import { verifyJWT } from 'src/service/firebase-auth/firebase-auth.service'

@Injectable()
/** ログインしているか */
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>()
    const token = request.headers['authorization']
    const decordedToken = await verifyJWT(token).catch((e) => {
      console.error(e)
      throw new UnauthorizedException()
    })
    if (!decordedToken.uid) throw new UnauthorizedException()
    request['uid'] = decordedToken.uid
    console.log('decordedToken', decordedToken)
    return true
  }
}
