import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from, of, take, map, Observable } from 'rxjs';
import { Coin } from './streamCoin';


@WebSocketGateway(811, {transports: ['websocket', 'polling'], cors: true})
export class CoinGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleMessage(@MessageBody() data: any) {
    console.log('data',data)
    const coins = new Coin([{symbol: 'BTC'}])
    return coins.getCryptoData().pipe(map((c) => {
        this.server.emit('msg', c)
    }))
  }
}