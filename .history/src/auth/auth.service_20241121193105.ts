import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register.dto';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginAuthDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/entities/user.entity';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  

  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;
    const findUser = await this.userRepository.findOne({ where: { email } });

    if (!findUser) throw new HttpException('USER NOT FOUND', 404);

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) throw new HttpException('PASSWORD INCORRECT', 403);

    const payload = { id: findUser.id, email: findUser.email}; 
    const token = this.jwtService.sign(payload);
    const data = {
      token,
      userId: findUser.id,
    };
    
    return data;
  }
}
