import { Injectable } from '@nestjs/common';
import { NewOrderDto } from "../../shared/dto/newOrder.dto";
const { Spot } = require('@binance/connector');

const apiKey = 'RTZtgUc4nAf7wkFJBfOz5dq2Y74ro2N3Ua4YJIGjhbcwxxH4QOfEhP3Si99ntKnb'
const apiSecret = 'vuHGw2enwzuV1twazqUYSV2984m0LQzgZcN7PIq72JtFLJdl1BKNCacoNTJp9u2r'
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

@Injectable()
export class TestnetService {

  async getAccountData(){
    client.account().then(response => client.logger.log(response.data))
    return
  }

  async newOrder(symbol:string, type:string, side:string, fills:object, price:number, quantity:number, timeInForce:string):Promise<NewOrderDto>{
    const order = client.newOrder(symbol, type, side, {
      price: price,
      quantity: quantity,
      timeInForce: timeInForce
    }).then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
    const data: NewOrderDto[] = order.data
    return
  }

  async orderCount(){
    client.orderCount().then(response => client.logger.log(response.data))
    return
  }

  async getOrder(){
    client.getOrder('BNBUSDT', {
      orderId: 416548
    }).then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
    return
  }
}
