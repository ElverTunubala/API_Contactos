import { Module } from '@nestjs/common';
import { ContactsService } from '../contacts/contacts.service';
import { ContactsController } from '../contacts/contacts.controller';
import { ContactEntity } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ ContactEntity])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
