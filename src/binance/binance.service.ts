import { BadRequestException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { PriceDto } from './dto/responce.dto';

import { WebSocket } from 'ws';






@Injectable()
export class BinanceService {

    async findPrice(symbol: string): Promise<PriceDto> {
        const result = await axios.get('https://www.binance.com/api/v1/ticker/price')
        if (result.status !== 200) {
            throw new BadRequestException()
        }

        const data: PriceDto[] = result.data;
        const single = data.find((x) => x.symbol === symbol)
        return single
    }

    async getAllCoinsPairUsdt(symbol: string): Promise<PriceDto> {
        const result = await axios.get('https://www.binance.com/api/v1/ticker/price')
        if (result.status !== 200) {
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


    
    async realTimePrice() {
        let ws_binance = new WebSocket('wss://stream.binance.com:9443/ws');
        let html_element_binance = document.getElementById('show_price_binance');

        let last_price_binance = null;

        ws_binance.onopen = function() {
            console.log("Binance connected...");
        };

        ws_binance.onopen = function () {
            ws_binance.send(JSON.stringify({
                'method': 'SUBSCRIBE',
                'params': ['btcusdt@trade'],
                'id': 1
            }))
        };


        ws_binance.onmessage = function (event) {
            let current_price_binance = JSON.parse(event.data.toString()).data.p;
            let price_binance = parseFloat(current_price_binance.p).toFixed(2);
            html_element_binance.innerText = price_binance;

            if ((price_binance < last_price_binance) ) {
                html_element_binance.innerText = '↓' + price_binance;
                html_element_binance.style.color = 'red';
            } else if ((price_binance > last_price_binance) ) {
                html_element_binance.innerText = '↑' + price_binance;
                html_element_binance.style.color = 'green';
            } else if ((price_binance == last_price_binance) ) {
                html_element_binance.innerText = price_binance;
                html_element_binance.style.color = 'black';
            }

            last_price_binance = price_binance;
        };
    }
}
