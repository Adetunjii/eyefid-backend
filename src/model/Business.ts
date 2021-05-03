import { Schema, model, Model } from "mongoose";
import { IBusinessModel } from "../interfaces/Business";

const businessSchema = new Schema({
  name: { type: String, required: true, maxLength: 255 },
  type: {
    type: String,
    enum: [
      "logistics",
      "food vendor",
      "beauty",
      "cleaning services",
      "manufacturing",
      "agriculture",
      "baking",
      "digital services",
      "trade",
    ],
    required: true,
  },

  location: { type: String, required: true },
  customer: { type: [String], required: true },
  usp: { type: [String], required: true },
  competitors: { type: [String], required: true },
  competitorAdvantages: { type: [String], required: true },
  strengths: { type: [String], required: true },
  weaknesses: { type: [String], required: true },
  opportunities: { type: [String], required: true },
  threats: { type: [String], required: true },
});

export const Business: Model<IBusinessModel> = model(
  "Business",
  businessSchema
);
