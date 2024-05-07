import mongoose from "mongoose";

const schema = new mongoose.Schema({
  personalInformation: String,
});

export default mongoose.models.personalInformation ||
  mongoose.model("personalInformation", schema);
