import { Body, Controller, Post } from '@nestjs/common';
import { ICoupon } from './types/Icoupon';
import { CouponModel, couponSchema } from './coupons.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { InjectModel } from '@nestjs/mongoose';
@Controller('coupons')
export class CouponsController {
  constructor(
    @InjectModel(CouponModel.name) private couponModel: Model<ICoupon>,
  ) {
  console.log(CouponModel.name, 'CouponModel.name');
    
  }

  @Post('create')
  async create(@Body() req: ICoupon) {
    const res = await this.couponModel.create({ uuid: uuidv4(), ...req });
    return { resp: res, result: 'coupon created' };
    // return await this.userAdapter.create(req);
  }
}
