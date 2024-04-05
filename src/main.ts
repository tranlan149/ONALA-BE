import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { useContainer } from 'typeorm';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import config from './config/swagger-config';
import * as basicAuth from "express-basic-auth";

// Import firebase
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create(AppModule);
  // app.use(formidable())  ;
  // app.use(multer().none());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    // Paths you want to protect with basic auth
    "/docs*",
    basicAuth({
      challenge: true,
      users: {
        yourUserName: "p4ssw0rd",
      },
    })
  );

  // Kêt nối firebase

// const configService: ConfigService = app.get(ConfigService);
//   // Set the config options
//   const adminConfig: ServiceAccount = {
//     "projectId": process.env.FIREBASE_PROJECT_ID,
//     "privateKey": process.env.FIREBASE_PRIVATE_KEY,
//     "clientEmail":process.env.FIREBASE_CLIENT_EMAIL,
//   };
//   // Initialize the firebase admin app
//   admin.initializeApp({
//     credential: admin.credential.cert(adminConfig),
//     databaseURL: "https://nestjs-fierebase-default-rtdb.firebaseio.com/",
//   }); 
  // Sử dụng middleware express-formidable
  
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document,  {
    swaggerOptions: {
      security: [{ 'bearer': [] }],
    },
  });

  await app.listen(PORT, () => {
    console.log(`App listen on port: http://localhost:${PORT}`);
    console.log(`Swagger-UI listen on: http://localhost:${PORT}/api-docs`);
  });
}
bootstrap();
