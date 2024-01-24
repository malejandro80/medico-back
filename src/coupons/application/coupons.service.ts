import { Injectable } from '@nestjs/common';
import { couponEntity, coupon as couponModel } from '../domain/coupon';
import { couponRepositoryAdapter } from '../infrastructure/coupon.repository.adapter';

@Injectable()
export class CouponsService {
  constructor(private couponAdapter: couponRepositoryAdapter) {}

  saveNewCoupon(coupon: couponEntity) {
    const newCoupon = new couponModel(coupon);
    return this.couponAdapter.create(newCoupon);
  }
}
