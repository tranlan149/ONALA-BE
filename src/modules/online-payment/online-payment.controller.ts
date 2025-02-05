import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnlinePaymentService } from './online-payment.service';
import { CreateOnlinePaymentDto } from './dto/create-online-payment.dto';
import { UpdateOnlinePaymentDto } from './dto/update-online-payment.dto';

@Controller('online-payment')
export class OnlinePaymentController {
  constructor(private readonly onlinePaymentService: OnlinePaymentService) {}

  @Post()
  create(@Body() createOnlinePaymentDto: CreateOnlinePaymentDto) {
    return this.onlinePaymentService.create(createOnlinePaymentDto);
  }

  @Get()
  findAll() {
    return this.onlinePaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onlinePaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOnlinePaymentDto: UpdateOnlinePaymentDto) {
    return this.onlinePaymentService.update(+id, updateOnlinePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlinePaymentService.remove(+id);
  }
}
