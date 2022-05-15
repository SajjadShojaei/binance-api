import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { GetDataService } from './get-data.service';

@Controller('getdata')
export class GetDataController {
    constructor(private getDataService: GetDataService){}

    @Get('/stream')
    getCoinsData(): Promise<any> {
        return this.getDataService.getCoins();
    }
}