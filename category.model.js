import mongoose from "mongoose";

const catetegorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const category = mongoose.model("category", catetegorySchema);
