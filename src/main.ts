import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // previene los parametros que no existen en mi modelo para que no se manden
      transformOptions: {
        // convierte a numero los parametros de la url sin necesidad el ParseIntPipe
        enableImplicitConversion: true,
      },
    }),
  )

  const config = new DocumentBuilder()
    .setTitle('API Ecommerce')
    .setDescription('Dev Store')
    .setVersion('1.0')
    .setContact('Mi Team', '', 'test@tesc.com')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)
  await app.listen(3000)
}
bootstrap()
