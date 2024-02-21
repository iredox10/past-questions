import mongoose, { mongo } from "mongoose";

const question = new mongoose.Schema({
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
  children: [
    {
      ref: "child",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
}{timestamps: true});

const Question = mongoose.models.question || mongoose.model("question", question);
export default Question;
