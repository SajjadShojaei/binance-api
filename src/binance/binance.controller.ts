import { Controller, Get, Param } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { Symbol } from './dto/symbol.interface';

@Controller('binance')
export class BinanceController {
constructor (
    private readonly binanceService: BinanceService
){}

    @Get('/:symbol')
    async getPrice(@Param('symbol') symbol:string): Promise<any>{
        return await this.binanceService.findPrice(symbol)
    }

    @Get('coinsByPair/:pair')
    async getAllCoinsPairUsdt(@Param('pair') symbol:string):Promise<any>{
        return await this.binanceService.getAllCoinsPairUsdt(symbol)
    }
    // @Get('/:getSymbol')
    // async getSymbol (@Param('symbol') Isymbol:string): Promise<any>{
    //     return await this.binanceService.findSymbol(Isymbol);
    // }
}
