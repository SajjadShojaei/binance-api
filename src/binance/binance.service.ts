import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PriceDto } from './dto/responce.dto';
import { Pokedex, Symbol } from './dto/symbol.interface';



@Injectable()
export class BinanceService {
    
    async findPrice(symbol:string):Promise<PriceDto>{
        const result= await axios.get('https://www.binance.com/api/v1/ticker/price')
        if(result.status!==200){
            throw new BadRequestException()
        }
        
        const data: PriceDto[]=result.data;
        const single=data.find((x)=>x.symbol===symbol)
        return single
    }

    async getAllCoinsPairUsdt(symbol:string):Promise<PriceDto>{
        const result= await axios.get('https://www.binance.com/api/v1/ticker/price')
        if(result.status!==200){
            throw new BadRequestException()
        }
        const pair = symbol
        const data = result.data;
        const single = data.filter(item => `${item.symbol} ${item.price}`.includes(pair))
        return single
    
    }

    // async findSymbol(Isymbol:string) :Promise<Pokedex>{
    //     const result = await axios.get('https://api.binance.com/api/v1/exchangeInfo')
    //     if(result.status!==200){
    //         throw new BadRequestException('symbol Not Found')
    //     }
        
    //     const data:Pokedex[] = result.data;
        
    //     const symdata = data.find((x) =>x.symbols)
    //     return symdata;

    // }
}
