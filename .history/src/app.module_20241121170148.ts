import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    ContactsModule, UsersModule, AuthModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
