import { IsString, IsNotEmpty, IsEmail, IsOptional, IsUUID, IsArray, Length, IsNumber } from 'class-validator';
export class CreateContactDto {

    @IsString()
    @IsNotEmpty()
    @Length(4, 20)
    name: string;
  
    @IsEmail()
    @IsOptional()
    @Length(10, 30)
    email?: string;
  
    @IsString()
    @IsNotEmpty()
    @Length(9, 15)
    phone: string;
  
    @IsArray()
    @IsOptional()
    @IsNumber({}, { each: true })  // Valida que cada elemento del array sea un número
    location?: number[];
  
    @IsString()
    @IsOptional()
    photo?: string;
  
    @IsUUID()
    @IsOptional()
    userId?: string; 
  }
  