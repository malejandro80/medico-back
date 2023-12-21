import { Module } from '@nestjs/common';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponModel, couponSchema } from './coupons.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CouponModel.name, schema: couponSchema }]),
  ],
  controllers: [CouponsController],
  providers: [CouponsService],
})
export class CouponsModule {}
