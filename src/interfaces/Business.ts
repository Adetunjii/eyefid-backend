import { Document } from "mongoose";

export type BusinessType =
  | "logistics"
  | "food vendor"
  | "beauty"
  | "cleaning services"
  | "manufacturing"
  | "agriculture"
  | "baking"
  | "real estate"
  | "digital services"
  | "trade";

export interface IBusiness {
  name: string;
  type: BusinessType;
  location: string;
  customer: string[];
  usp: string[];
  competitors: string[];
  competitorAdvantages: string[];
  strengths: string[];
  weaknesses: string[];
  opportunitites: string[];
  threats: string[];
}

export interface IBusinessModel extends IBusiness, Document {}

export interface IBusinessDTO extends IBusiness {
  _id: string;
}
