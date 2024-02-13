import mongoose, { mongo } from "mongoose";

const course = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  semester: [
    {
      ref: "semester",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Course = mongoose.model("course", course);
export default Course;
