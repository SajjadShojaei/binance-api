import { WebSocket } from "ws";
import { Logger } from "@nestjs/common";
import { Observable } from "rxjs";


export class Coin {
    private readonly logger = new Logger(Coin.name)
    private baseUrl: string
    private url: string
    constructor(coin: { symbol: string }[]) {
        this.baseUrl = 'wss://stream.binance.com:9443/stream?streams='
        this.url = coin.map((c) => {
            return `${c.symbol.toLowerCase()}usdt@trade`
        }).join('/')
        }

    getCryptoData(): any {
        const stream$ = new Observable((observer) => {

            const ws = new WebSocket(`${this.baseUrl}${this.url}`)
            ws.on('open', () => {
                this.logger.log('Connection established')
            })
            ws.onmessage = (msg: any) => {
                const message = JSON.parse(msg.data)  
                observer.next(message)
            }

            ws.close = () => {
                this.logger.log('Connection closed')
            }
            
        })
        return stream$
    }
}