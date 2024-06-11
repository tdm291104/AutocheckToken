
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'John Doe', description: 'The name of the user' })
  name?: string;

  @ApiPropertyOptional({ example: 30, description: 'The age of the user' })
  age?: number;

  @ApiPropertyOptional({ example: 'john@example.com', description: 'The email of the user' })
  email?: string;

  @ApiPropertyOptional({ example: '123', description: 'The pass of the user' })
  password?: string;
}