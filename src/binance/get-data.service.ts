import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Coin } from './streamCoin';

@Injectable()
export class GetDataService {
    async getCoins(): Promise<Observable<any[]>> {
        const coins = new Coin([{
            symbol: 'BTC'
        }])
        return coins.getCryptoData().pipe(map((e) => {
            console.log(e)
            return e
        }))
    }


}