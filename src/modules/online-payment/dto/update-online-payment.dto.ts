import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlinePaymentDto } from './create-online-payment.dto';

export class UpdateOnlinePaymentDto extends PartialType(CreateOnlinePaymentDto) {}
