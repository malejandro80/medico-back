import { Ilocation } from "./Ilocation";

export interface ICoupon {
  uuid: string;
  title: string;
  description: string;
  type: string;
  img: string;
  expire_at: string;
  location: Ilocation;
}
