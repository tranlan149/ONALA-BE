import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { ValidationBodyPipe } from './validation.pipe';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationBodyPipe,
    },
  ],
})
export class PipeModule {}
