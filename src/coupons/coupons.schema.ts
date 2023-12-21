import mongoose, { Schema, model } from 'mongoose';
import { Ilocation } from './types/Ilocation';
import { ICoupon } from './types/Icoupon';

// 2. Create a Schema corresponding to the document interface.

const locationSchema = new Schema<Ilocation>({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
});
export const couponSchema = new Schema<ICoupon>(
  {
    uuid: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, required: true },
    img: { type: String },
    expire_at: { type: String, required: true },
    location: locationSchema,
  },
  { timestamps: true, collection: 'coupons' },
);

// 3. Create a Model.

export const CouponModel = mongoose.model<ICoupon>('coupons', couponSchema);
