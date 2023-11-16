import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly cats: unknown[] = [];

  findAll(): unknown[] {
    return this.cats;
  }
}