import { couponEntity } from './coupon';

export interface couponRepository {
  create(coupon: couponEntity);
  findById(uuid: string): Promise<couponEntity | null>;
  getCoupons(location: number[], rad: number): Promise<couponEntity[] | null>;
}
