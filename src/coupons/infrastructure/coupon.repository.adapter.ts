import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { couponRepository } from '../domain/coupon.repository';
import { couponEntity } from '../domain/coupon';
import { CouponModel } from './coupons.schema';

@Injectable()
export class couponRepositoryAdapter implements couponRepository {
  constructor(
    @InjectModel(CouponModel.name) private couponModel: Model<couponEntity>,
  ) {}
  async create(coupon: couponEntity) {
    return await this.couponModel.create(coupon);
  }
  findById(uuid: string): Promise<couponEntity> {
    throw new Error('Method not implemented.');
  }
  async getCoupons(location: number[], rad: number): Promise<couponEntity[]> {
    return await this.couponModel.find({
      location: {
        $nearSphere: {
          $geometry: { type: 'Point', coordinates: location },
          $maxDistance: rad,
        },
      },
    });
  }
}
