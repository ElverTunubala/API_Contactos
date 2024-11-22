import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    company?: string;
}