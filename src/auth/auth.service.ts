import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/user.interface';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from '../users/dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email};
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async register(user: User): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.usersService.create({ ...user, password: hashedPassword });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Thực hiện chuyển đổi CreateUserDto thành User
    const user: User = {
      id: null, // bạn có thể thiết lập id ở đây hoặc trong hàm register()
      ...createUserDto,
    };
    return user;
  }
}