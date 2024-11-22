import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ ContactEntity])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
