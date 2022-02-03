import { ApiProperty } from "@nestjs/swagger";

export class NewOrderDto{
  @ApiProperty()
  symbol:string;

  @ApiProperty()
  price:number;

  @ApiProperty()
  origQty:number;

  @ApiProperty()
  status:string;

  @ApiProperty()
  type:string;

  @ApiProperty()
  side:string;

  @ApiProperty()
  fills:{
    price:number;
    quantity:number;
    timeInForce:string;
  }
}

// orderId:string;
// orderListId:number;
// clientOrderId:string;
// transactTime:Date;
// executedQty:number;
// cummulativeQuoteQty:number;
// timeInForce:string;