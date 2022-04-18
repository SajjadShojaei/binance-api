import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinanceModule } from './binance/binance.module';
import { TestnetService } from "./testnet/services/testnet.service";
import { TestnetController } from './testnet/controllers/testnet.controller';
import { TestnetModule } from './testnet/testnet.module';
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [BinanceModule, TestnetModule, MongooseModule.forRoot('mongodb://localhost:27017/binance_testnet')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
