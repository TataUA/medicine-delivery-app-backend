import mongoose, { Schema } from "mongoose";

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default mongoose.model("Shop", ShopSchema);
