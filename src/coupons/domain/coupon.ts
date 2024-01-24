import { v4 as uuidv4 } from 'uuid';

export interface couponEntity {
  uuid: string;
  title: string;
  description: string;
  type: string;
  img: string;
  expire_at: string;
  location: [number, number];
}

export class coupon implements couponEntity {
  uuid: string;
  title: string;
  description: string;
  type: string;
  img: string;
  expire_at: string;
  location: [number, number];

  constructor(coupon: couponEntity) {
    if (!coupon.uuid) {
      Object.assign(this, coupon);
      this.uuid = uuidv4();
    }
  }
}
