import { Controller, Get, Param } from '@nestjs/common';
import { usersService } from './users.service';

@Controller('users')
export class userController {
  constructor(private readonly userservice: usersService) {}

  @Get()
  getUsers() {
    return this.userservice.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userservice.getUserById(id);
  }
}
