import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceModule } from './binance/binance.module';
import { TestnetService } from "./testnet/services/testnet.service";
import { ControllersController } from './testnet/controllers/controllers.controller';
import { TestnetModule } from './testnet/testnet.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [BinanceModule, TestnetModule, DatabaseModule],
  controllers: [AppController, ControllersController],
  providers: [AppService, TestnetService],
})
export class AppModule {}
