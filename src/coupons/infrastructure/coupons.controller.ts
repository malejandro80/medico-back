import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  ParseArrayPipe,
} from '@nestjs/common';
import { couponEntity } from '../domain/coupon';
import { CouponsService } from '../application/coupons.service';
import { Public } from 'src/shared/decorators/auth';
@Controller('coupons')
export class CouponsController {
  constructor(private couponsService: CouponsService) {}

  @Public()
  @Post('create')
  async create(@Body() req: couponEntity) {
    return await this.couponsService.saveNewCoupon(req);
  }
  @Public()
  @Get()
  async getCoupons(
    @Query('location', new ParseArrayPipe({ items: Number, separator: ',' }))
    location: number[],
    @Query('radius') radius: number,
  ) {
    return await this.couponsService.searchCoupons(location, radius);
  }
}
