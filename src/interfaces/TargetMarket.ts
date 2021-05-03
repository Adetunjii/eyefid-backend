import { Document, Schema } from "mongoose";

export interface ITargetMarket {
  status: string;
  socialClass: string;
  gender: string;
  age: number;
  density: string;
  informationSought: string;
  benefitSought: string;
}

export interface ITargetMarketModel extends ITargetMarket, Document {}

export interface TargetMarketDTO extends ITargetMarketModel {
  _id: string;
}
