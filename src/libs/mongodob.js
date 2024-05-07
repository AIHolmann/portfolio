import mongoose from "mongoose";

export async function connecDB() {
  await mongoose.connect(process.env.MONGODB_URL);
}
