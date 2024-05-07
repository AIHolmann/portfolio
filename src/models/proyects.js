import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  description: String,
  stack: Array,
});

export default mongoose.models.Proyects || mongoose.model("Proyects", schema);
