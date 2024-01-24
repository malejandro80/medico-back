import { couponEntity } from './coupon';

export interface couponRepository {
  create(coupon: couponEntity);
  findById(uuid: string): Promise<couponEntity | null>;
  getCoupons(rad: number): Promise<couponEntity[] | null>;
}
