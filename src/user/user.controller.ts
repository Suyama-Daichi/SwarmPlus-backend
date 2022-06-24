import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common'
import { AuthGuard } from 'src/guard/auth.guard'
import { CreateUserDTO, UpdateUserDTO } from 'src/user/user.dto'
import { UserService } from './user.service'

@UseGuards(new AuthGuard())
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:userId')
  getUser(@Param('userId', new ParseIntPipe()) userid: number) {
    return this.userService.getUser(Number(userid))
  }

  @Post()
  async createUser(@Body() body: CreateUserDTO) {
    const result = await this.userService.postUser(body)
    console.log(result)
    return result
  }

  @Put('/:uid')
  async updateUser(@Body() body: UpdateUserDTO, @Param('uid') uid: string) {
    const result = await this.userService.updateUser(uid, body)
    return result
  }
}
