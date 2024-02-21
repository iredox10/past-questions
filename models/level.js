import mongoose, { mongo } from "mongoose";

const level = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    levelNumber: {
      type: String,
      required: true,
    },
    courses: [
      {
        ref: "course",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true },
);

const Level = mongoose.models.level || mongoose.model("level", level);
export default Level;

