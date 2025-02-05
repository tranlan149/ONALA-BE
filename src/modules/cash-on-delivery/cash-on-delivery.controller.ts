import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CashOnDeliveryService } from './cash-on-delivery.service';
import { CreateCashOnDeliveryDto } from './dto/create-cash-on-delivery.dto';
import { UpdateCashOnDeliveryDto } from './dto/update-cash-on-delivery.dto';

@Controller('cash-on-delivery')
export class CashOnDeliveryController {
  constructor(private readonly cashOnDeliveryService: CashOnDeliveryService) {}

  @Post()
  create(@Body() createCashOnDeliveryDto: CreateCashOnDeliveryDto) {
    return this.cashOnDeliveryService.create(createCashOnDeliveryDto);
  }

  @Get()
  findAll() {
    return this.cashOnDeliveryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cashOnDeliveryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCashOnDeliveryDto: UpdateCashOnDeliveryDto) {
    return this.cashOnDeliveryService.update(+id, updateCashOnDeliveryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cashOnDeliveryService.remove(+id);
  }
}
