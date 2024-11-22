import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt-auth.guards';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './jwtServices/jwt.strategy';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtAuthGuard,JwtStrategy],
  exports: [JwtStrategy]
})
export class AuthModule {}
