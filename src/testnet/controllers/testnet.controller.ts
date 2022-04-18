import { Controller, Get, Post } from "@nestjs/common";
import { TestnetService } from "../services/testnet.service";

@Controller('testnet')
export class ControllersController {
  constructor(private readonly testnetService:TestnetService) {
  }

  @Get('getInfo')
  async getAccountInfo(){
    return await this.testnetService.getAccountData()
  }

  @Post('order/new/buy')
  async newOrder(symbol:string, type:string, side:string, fills:object, price:number, quantity:number, timeInForce:string):Promise<any>{
    return await this.testnetService.newOrder(symbol,type,side,fills,price,quantity,timeInForce)
  }

  @Get('order/count')
  async orderCount(){
    return await this.testnetService.orderCount()
  }

  @Get('order/info')
  async getOrder(){
    return await this.testnetService.getOrder()
  }
}
