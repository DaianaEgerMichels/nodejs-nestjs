import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // automatically transform the request body
      whitelist: true, // remove non-whitelisted properties in the dto
      forbidNonWhitelisted: true, // throw an error if non-whitelisted properties are present
    }),
  );
  // for class-validator to resolve dependencies the same as nestjs
  useContainer(app.select(AppModule), {
    fallbackOnErrors: true, // if don't resolve with nestjs, use the class-validator config
  });

  await app.listen(3000);
}
bootstrap();
