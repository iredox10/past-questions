import mongoose from "mongoose";
import slug from "slug";

const school = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    shortName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    website: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    departments: [
      {
        ref: "department",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  { timestamps: true },
);

school.pre("save", function () {
  if (this.name) {
    this.slug = slug(this.name, { lower: true });
  }
});

const School = mongoose.models.school || mongoose.model("school", school);
export default School;
