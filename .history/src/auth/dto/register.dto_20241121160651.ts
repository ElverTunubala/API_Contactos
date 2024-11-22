import { PartialType } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LoginAuthDto } from './login.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {}
