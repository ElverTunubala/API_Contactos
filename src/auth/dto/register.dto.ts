import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    company?: string;
}
