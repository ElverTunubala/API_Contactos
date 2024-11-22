import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber } from 'class-validator';
import { RegisterAuthDto } from 'src/auth/dto/register.dto';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;
  
    
  
    @IsString()
    @IsOptional()
    company?: string;
  }

  export class CreateUserDto extends RegisterAuthDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsNumber()
    public id: string;

    @IsString()
    @IsOptional()
    company?: string;
}