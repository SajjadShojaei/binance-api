import { Module } from '@nestjs/common';
import { BinanceController } from './binance.controller';
import { BinanceService } from './binance.service';
import { GetDataController } from './get-data.controller';
import { GetDataService } from './get-data.service';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports:[WebsocketModule, BinanceModule],
  controllers: [BinanceController, GetDataController],
  providers: [BinanceService, GetDataService]
})
export class BinanceModule {}
