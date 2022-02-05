import { Module } from '@nestjs/common';
import { MongooseConfigService } from "./mongoose-config.service";


@Module({
  providers: [MongooseConfigService]
})
export class DatabaseModule {}
