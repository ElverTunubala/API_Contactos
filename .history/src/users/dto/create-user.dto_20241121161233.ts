import { IsString, IsNotEmpty, IsOptional} from 'class-validator';
import { RegisterAuthDto } from '../';

export class CreateUserDto extends RegisterAuthDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    company?: string;
}