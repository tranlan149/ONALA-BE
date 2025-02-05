import { Test, TestingModule } from '@nestjs/testing';
import { CashOnDeliveryService } from './cash-on-delivery.service';

describe('CashOnDeliveryService', () => {
  let service: CashOnDeliveryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashOnDeliveryService],
    }).compile();

    service = module.get<CashOnDeliveryService>(CashOnDeliveryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
