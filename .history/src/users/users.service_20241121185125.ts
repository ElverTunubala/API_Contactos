import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const user = this.userRepository.create(createUserDto);
      return await this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException('Error creating user');
    }
  }

  // Obtener todos los usuarios
  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find({ relations: ['contactos'] });
    } catch (error) {
      throw new InternalServerErrorException('Error fetching users');
    }
  }

  // Obtener usuario por ID
  async findOne(id: string): Promise<UserEntity> {
    try {
      const user = await this.userRepository.findOne({ where: { id }, relations: ['contactos'] });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return user;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching user');
    }
  }

  // Actualizar usuario por ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    try {
      const user = await this.userRepository.preload({ id, ...updateUserDto });
      if (!user) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return await this.userRepository.save(user);
    } catch (error) {
      throw new InternalServerErrorException('Error updating user');
    }
  }

  // Eliminar usuario por ID
  async remove(id: string): Promise<void> {
    try {
      const user = await this.findOne(id);
      await this.userRepository.remove(user);
    } catch (error) {
      throw new InternalServerErrorException('Error deleting user');
    }
  }
}
