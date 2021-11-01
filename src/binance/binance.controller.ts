import { Controller, Get, Param } from '@nestjs/common';
import { BinanceService } from './binance.service';

@Controller('binance')
export class BinanceController {
constructor (
    private readonly binanceService: BinanceService
){}

    @Get('/:symbol')
    async getPrice(@Param('symbol') symbol:string): Promise<any>{
        return await this.binanceService.findPrice(symbol)
    }
}
