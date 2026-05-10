import { Injectable } from '@nestjs/common';

@Injectable()
export class usersService {
  getUsers() {
    return [
      {
        id: 1,
        name: 'John',
        email: 'john@yopmail.com',
      },
      {
        id: 2,
        name: 'Demo',
        email: 'demo@yopmail.com',
      },
    ];
  }

  getUserById(id: string) {
        return {
        id,
        name: 'Demo user',
        email: 'demo@gmail.com',
        };
  }
}
