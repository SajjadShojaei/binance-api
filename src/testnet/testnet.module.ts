import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { NewOrder, NewOrderSchema } from "../shared/schemas/newOrder.schema";
import { TestnetController } from "./controllers/testnet.controller";
import { TestnetService } from "./services/testnet.service";

@Module({
  imports:[MongooseModule.forFeature([{name: NewOrder.name, schema:NewOrderSchema}])],
  controllers:[TestnetController],
  providers:[TestnetService]
})
export class TestnetModule {}
