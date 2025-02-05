import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { MulterModule } from '@nestjs/platform-express';
import { ProductModule } from './modules/product/product.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      dest: './uploads', // Đường dẫn tới thư mục lưu trữ file tải lên
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
