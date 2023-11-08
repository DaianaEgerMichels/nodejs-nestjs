import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // automatically transform the request body
      whitelist: true, // remove non-whitelisted properties in the dto
      forbidNonWhitelisted: true, // throw an error if non-whitelisted properties are present
    }),
  );
  await app.listen(3000);
}
bootstrap();
