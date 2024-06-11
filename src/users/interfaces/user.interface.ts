import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name: string;

  @ApiProperty({ example: 30, description: 'The age of the user' })
  age: number;

  @ApiProperty({ example: 'john@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: '12345', description: 'The pass of the user'})
  password: string
}