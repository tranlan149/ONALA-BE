import { Test, TestingModule } from '@nestjs/testing';
import { OnlinePaymentController } from './online-payment.controller';
import { OnlinePaymentService } from './online-payment.service';

describe('OnlinePaymentController', () => {
  let controller: OnlinePaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlinePaymentController],
      providers: [OnlinePaymentService],
    }).compile();

    controller = module.get<OnlinePaymentController>(OnlinePaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
