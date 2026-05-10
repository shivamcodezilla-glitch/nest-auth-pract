import { Module } from '@nestjs/common';
import { userController } from './users.controller';
import { usersService } from './users.service';

@Module({
  controllers: [userController],
  providers: [usersService],
})
export class UserModule {}  
