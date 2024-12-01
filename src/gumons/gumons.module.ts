import { Module } from '@nestjs/common';
import { GumonsService } from './gumons.service';
import { GumonsController } from './gumons.controller';

@Module({
  controllers: [GumonsController],
  providers: [GumonsService],
})
export class GumonsModule {}
