import { Module } from '@nestjs/common';
import { ContactService } from '../contacts/contacts.service';
import { ContactController } from '../contacts/contacts.controller';
import { ContactEntity } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ ContactEntity])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactsModule {}
