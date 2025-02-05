import { Injectable } from '@nestjs/common';
import { CreateCashOnDeliveryDto } from './dto/create-cash-on-delivery.dto';
import { UpdateCashOnDeliveryDto } from './dto/update-cash-on-delivery.dto';

@Injectable()
export class CashOnDeliveryService {
  create(createCashOnDeliveryDto: CreateCashOnDeliveryDto) {
    return 'This action adds a new cashOnDelivery';
  }

  findAll() {
    return `This action returns all cashOnDelivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cashOnDelivery`;
  }

  update(id: number, updateCashOnDeliveryDto: UpdateCashOnDeliveryDto) {
    return `This action updates a #${id} cashOnDelivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} cashOnDelivery`;
  }
}
