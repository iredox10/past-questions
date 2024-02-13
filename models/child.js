import mongoose, { mongo } from "mongoose";

const child = new mongoose.Schema({
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
  grandChild: [
    {
      ref: "grandChild",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
}{timestamps: true});

const Child = mongoose.model("child", child);
export default Child;
