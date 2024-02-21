import mongoose, { mongo } from "mongoose";

const semester = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  course: [
    {
      ref: "course",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Semester =
  mongoose.models.semester || mongoose.model("semester", semester);
export default Semester;
