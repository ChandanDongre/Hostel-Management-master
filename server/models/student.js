import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    contact: {
      type: Number,
      required: false,
    },
    fatherContact: {
      type: Number,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    roomNo: {
      type: String,
      required: false,
    },
    blockNo: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
