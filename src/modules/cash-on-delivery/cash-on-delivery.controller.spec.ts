import { Test, TestingModule } from '@nestjs/testing';
import { CashOnDeliveryController } from './cash-on-delivery.controller';
import { CashOnDeliveryService } from './cash-on-delivery.service';

describe('CashOnDeliveryController', () => {
  let controller: CashOnDeliveryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashOnDeliveryController],
      providers: [CashOnDeliveryService],
    }).compile();

    controller = module.get<CashOnDeliveryController>(CashOnDeliveryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
