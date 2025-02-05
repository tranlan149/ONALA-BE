import { PartialType } from '@nestjs/mapped-types';
import { CreateCashOnDeliveryDto } from './create-cash-on-delivery.dto';

export class UpdateCashOnDeliveryDto extends PartialType(CreateCashOnDeliveryDto) {}
