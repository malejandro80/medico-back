import { Body, Controller, Post } from '@nestjs/common';
import { CouponModel } from './coupons.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
import { couponEntity } from '../domain/coupon';
import { CouponsService } from '../application/coupons.service';
import { Public } from 'src/shared/decorators/auth';
@Controller('coupons')
export class CouponsController {
  constructor(private couponsService: CouponsService) {}

  @Public()
  @Post('create')
  async create(@Body() req: couponEntity) {
    // const res = await this.couponModel.create({ uuid: uuidv4(), ...req });
    return await this.couponsService.saveNewCoupon(req);
    // return { resp: res, result: 'coupon created' };
    // return await this.userAdapter.create(req);
  }
}
