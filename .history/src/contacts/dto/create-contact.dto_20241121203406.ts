import { IsString, IsNotEmpty, IsEmail, IsOptional, IsUUID, IsArray } from 'class-validator';
export class CreateContactDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @IsString()
    @IsNotEmpty()
    number: string;
  
    @IsArray()
    @IsOptional()
    location?: string[];
  
    @IsString()
    @IsOptional()
    photo?: string;
  
    @IsUUID()
    @IsNotEmpty()
    userId: string; 
  }
  