import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PriceDto } from './responce.dto';

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
}
