import { Injectable } from '@nestjs/common';
import { CreateOnlinePaymentDto } from './dto/create-online-payment.dto';
import { UpdateOnlinePaymentDto } from './dto/update-online-payment.dto';

@Injectable()
export class OnlinePaymentService {
  create(createOnlinePaymentDto: CreateOnlinePaymentDto) {
    return 'This action adds a new onlinePayment';
  }

  findAll() {
    return `This action returns all onlinePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onlinePayment`;
  }

  update(id: number, updateOnlinePaymentDto: UpdateOnlinePaymentDto) {
    return `This action updates a #${id} onlinePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlinePayment`;
  }
}
