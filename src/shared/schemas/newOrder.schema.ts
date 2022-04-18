import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
export type NewOrderSchemaDocument = NewOrder & Document;

@Schema()
export class NewOrder{
  _id: Types.ObjectId
  @Prop()
  symbol:string;

  @Prop()
  price:number;

  @Prop()
  origQty:number;

  @Prop()
  status:string;

  @Prop()
  type:string;

  @Prop()
  side:string;

}

export const NewOrderSchema = SchemaFactory.createForClass(NewOrder);