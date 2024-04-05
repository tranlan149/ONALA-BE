import { DocumentBuilder } from '@nestjs/swagger';

//swagger
const config = new DocumentBuilder()
  .setTitle('E-Commerce API')
  .setDescription('The API E-Commerce for user and admin')
  .setVersion('1.0')
  .addServer('http://localhost:3000/', 'Local environment')
  .addServer('https://staging.yourapi.com/', 'Staging')
  .addServer('https://ecommerce-1o28.onrender.com/', 'Production')
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT', // Định dạng của token (thường là JWT)
      description: 'Input your JWT token', // Mô tả
      name: 'Authorization', // Tên của header
      in: 'header', // Header được chứa trong request header
    },
    'bearer', // Loại xác thực
  )
  .build();

export default config;
