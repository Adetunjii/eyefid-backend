import { Schema, model, Model } from "mongoose";
import { ITargetMarket, ITargetMarketModel } from "../interfaces/TargetMarket";

const targetMarketSchema = new Schema({
  maritalStatus: {
    type: String,
    enum: ["Single", "Married", "Divorced", "Seperated"],
    required: true,
  },
  socialClass: {
    type: String,
    enum: ["Upper Class", "Middle Class"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

export const TargetMarket: Model<ITargetMarketModel> = model(
  "TargetMarket",
  targetMarketSchema
);
