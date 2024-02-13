import { v4 as uuidv4 } from 'uuid';

export interface couponEntity {
  _id: string;
  title: string;
  description: string;
  type: string;
  img: string;
  expire_at: string;
  location: [number, number];
}

export class coupon implements couponEntity {
  _id: string;
  title: string;
  description: string;
  type: string;
  img: string;
  expire_at: string;
  location: [number, number];

  constructor(coupon: couponEntity) {
    if (!coupon._id) {
      Object.assign(this, coupon);
      this._id = uuidv4();
    }
  }
}
