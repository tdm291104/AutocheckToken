import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // Đảm bảo thay đổi 'SECRET_KEY' bằng một khóa bí mật an toàn
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    console.log(payload)
    return this.usersService.findByEmail(payload.email);
  }
}