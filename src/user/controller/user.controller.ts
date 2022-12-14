import { Controller, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get("/user")
  getHello(): string {
    return this.appService.getHello();
  }
}
