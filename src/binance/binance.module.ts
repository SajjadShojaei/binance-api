import { Module } from '@nestjs/common';
import { BinanceController } from './binance.controller';
import { BinanceService } from './binance.service';
import { WebsocketModule } from './websocket/websocket.module';

@Module({
  imports:[WebsocketModule],
  controllers: [BinanceController],
  providers: [BinanceService]
})
export class BinanceModule {}
