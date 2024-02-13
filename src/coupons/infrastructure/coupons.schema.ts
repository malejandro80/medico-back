import mongoose, { Schema } from 'mongoose';
import { couponEntity } from '../domain/coupon';

export const couponSchema = new Schema<couponEntity>(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    img: { type: String },
    expire_at: { type: String, required: true },
    location: { type: [Number], index: '2dsphere' },
  },
  { timestamps: true, collection: 'coupons' },
);


export const CouponModel = mongoose.model<couponEntity>(
  'coupons',
  couponSchema,
);
