import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContactService } from '../contacts';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    return await this.contactService.create(createContactDto);
  }

  @Get()
  async findAll() {
    return await this.contactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contactService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return await this.contactService.update(id, updateContactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contactService.remove(id);
  }
}
