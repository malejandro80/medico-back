import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { couponRepository } from '../domain/coupon.repository';
import { couponEntity } from '../domain/coupon';
import { CouponModel } from './coupons.schema';
import { v4 as uuidv4 } from 'uuid';

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
  getCoupons(rad: number): Promise<couponEntity[]> {
    throw new Error('Method not implemented.');
  }
}
