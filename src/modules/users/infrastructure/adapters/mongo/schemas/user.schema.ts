import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserSchemaDocument = User & Document;

@Schema()
export class User {
  @Prop()
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;

  @Prop()
  countryCode: number;

  @Prop()
  phone: number;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
