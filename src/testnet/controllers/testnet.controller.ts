import { Controller, Get, Post } from "@nestjs/common";
import { TestnetService } from "../services/testnet.service";

@Controller('testnet')
export class TestnetController {
  constructor(private readonly testnetService:TestnetService) {
  }

  @Get('getInfo')
  async getAccountInfo(){
    return await this.testnetService.getAccountData()
  }

  @Get('order/buy/new')
  async newOrder(symbol:string, type:string, side:string, fills:object, price:number, quantity:number, timeInForce:string):Promise<any>{
    return await this.testnetService.createNewOrder(symbol,type,side,fills,price,quantity,timeInForce)
  }

  @Get('order/count')
  async orderCount(){
    return await this.testnetService.orderCount()
  }

  @Get('order/info')
  async getOrder(){
    return await this.testnetService.getOrder()
  }

  @Get('wallet/deposit/generate')
  async getDepositAddress(){
    return await this.testnetService.getDepositAddress()
  }

  @Get('wallet/deposit/history')
  async getDepositHistory(){
    return await this.testnetService.getDepositHistory()
  }
}
