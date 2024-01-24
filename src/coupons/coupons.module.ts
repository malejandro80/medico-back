import { Module } from '@nestjs/common';
import { CouponsController } from './infrastructure/coupons.controller';
import { CouponsService } from './application/coupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponModel, couponSchema } from './infrastructure/coupons.schema';
import { couponRepositoryAdapter } from './infrastructure/coupon.repository.adapter';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CouponModel.name, schema: couponSchema },
    ]),
  ],
  controllers: [CouponsController],
  providers: [CouponsService, couponRepositoryAdapter],
})
export class CouponsModule {}
