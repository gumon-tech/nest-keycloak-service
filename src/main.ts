import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const appPort = configService.get<number>('PORT') || 3000;

  await app.listen(appPort);

  console.log(`\n\t🚀 service ready at http://localhost:${appPort}/ \n\t`);
}
bootstrap();
