import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../contacts/entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactEntity)
    private contactRepository: Repository<ContactE>,
  ) {}

  // Create contact
  async create(createContactDto: CreateContactDto): Promise<Contact> {
    try {
      const contact = this.contactRepository.create(createContactDto);
      return await this.contactRepository.save(contact);
    } catch (error) {
      throw new InternalServerErrorException('Error creating contact');
    }
  }

  // Get all contacts
  async findAll(): Promise<Contact[]> {
    try {
      return await this.contactRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching contacts');
    }
  }

  // Get contact by ID
  async findOne(id: string): Promise<Contact> {
    try {
      const contact = await this.contactRepository.findOne({ where: { id } });
      if (!contact) {
        throw new NotFoundException(`Contact with ID ${id} not found`);
      }
      return contact;
    } catch (error) {
      throw new InternalServerErrorException('Error fetching contact');
    }
  }

  // Update contact by ID
  async update(id: string, updateContactDto: UpdateContactDto): Promise<Contact> {
    try {
      const contact = await this.contactRepository.preload({ id, ...updateContactDto });
      if (!contact) {
        throw new NotFoundException(`Contact with ID ${id} not found`);
      }
      return await this.contactRepository.save(contact);
    } catch (error) {
      throw new InternalServerErrorException('Error updating contact');
    }
  }

  // Delete contact by ID
  async remove(id: string): Promise<void> {
    try {
      const contact = await this.findOne(id);
      await this.contactRepository.remove(contact);
    } catch (error) {
      throw new InternalServerErrorException('Error deleting contact');
    }
  }
}
