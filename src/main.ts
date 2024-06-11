import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API documentation for User management')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  // Cấu hình Passport
  app.use(passport.initialize());

  await app.listen(3000);
}
bootstrap();