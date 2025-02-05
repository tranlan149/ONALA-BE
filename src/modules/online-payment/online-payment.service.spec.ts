import { Test, TestingModule } from '@nestjs/testing';
import { OnlinePaymentService } from './online-payment.service';

describe('OnlinePaymentService', () => {
  let service: OnlinePaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlinePaymentService],
    }).compile();

    service = module.get<OnlinePaymentService>(OnlinePaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
