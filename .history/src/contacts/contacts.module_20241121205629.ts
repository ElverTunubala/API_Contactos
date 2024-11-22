import { Module } from '@nestjs/common';
import { ContactService } from '../contacts/contacts.service';
import { ContactController } from '../contacts/contacts.controller';
import { ContactEntity } from './entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../';

@Module({
  imports: [TypeOrmModule.forFeature([ ContactEntity,UserEntity])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactsModule {}
