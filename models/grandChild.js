import mongoose, { mongo } from "mongoose";

const grandChild = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const GrandChild =
  mongoose.models.grandchild || mongoose.model("grandchild", grandChild);
export default GrandChild;
