import { Module } from '@nestjs/common';
import { CashOnDeliveryService } from './cash-on-delivery.service';
import { CashOnDeliveryController } from './cash-on-delivery.controller';

@Module({
  controllers: [CashOnDeliveryController],
  providers: [CashOnDeliveryService],
})
export class CashOnDeliveryModule {}
