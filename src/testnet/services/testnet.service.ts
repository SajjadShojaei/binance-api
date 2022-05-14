import { Injectable } from '@nestjs/common';
import { NewOrderDto } from "../../shared/dto/newOrder.dto";
import { InjectModel } from "@nestjs/mongoose";
import { NewOrder, NewOrderSchemaDocument } from "../../shared/schemas/newOrder.schema";
import { Model } from "mongoose";
const { Spot } = require('@binance/connector');

const apiKey = 'RTZtgUc4nAf7wkFJBfOz5dq2Y74ro2N3Ua4YJIGjhbcwxxH4QOfEhP3Si99ntKnb'
//const apiKey = 'pXM4ResFsfrBeGPDyWo1bSd0yMhEuBhK3ptK0vVsiCIz68Wz13pnGF7GQ22Ugsje'
const apiSecret = 'vuHGw2enwzuV1twazqUYSV2984m0LQzgZcN7PIq72JtFLJdl1BKNCacoNTJp9u2r'
//const apiSecret = 'Jd2D5lw0Lq1OJZKuVk0EtGmi6lQVmGwdXihfJzYpRHBYXeKM0FWBcws80FCy86S6'
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

@Injectable()
export class TestnetService {
  constructor(@InjectModel(NewOrder.name) private readonly orderModel: Model<NewOrderSchemaDocument>) {}

  async getAccountData(){
    return client.account().then(response => client.logger.log(response.data))
  }

  async createNewOrder():Promise<NewOrderDto>{
    const order = client.newOrderTest('BNBUSDT', 'SELL', 'LIMIT', {
      price: '402.81',
      quantity: 10,
      timeInForce: 'GTC'
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

  async getDepositAddress(){
    client.depositAddress('BNB')
      .then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
    return
  }

  async getDepositHistory(){
    client.depositHistory(
      {
        coin: 'BNB',
        status: 1
      }
    ).then(response => client.logger.log(response.data))
      .catch(error => client.logger.error(error))
  }
}
