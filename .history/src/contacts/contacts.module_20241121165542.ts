import { Module } from '@nestjs/common';
import { ContactsService } from '../';
import { ContactsController } from './contacts.controller';
import { ContactEntity } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ ContactEntity])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
