import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule,Doctor])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
