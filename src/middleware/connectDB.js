import mongoose from "mongoose";
import Admin from "@/server/models/Admin"
import Lead from "@/server/models/Lead"
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current DB connection
    console.log("bruh2")
    return handler(req, res);
  }
  // create a new db connection
  await mongoose.connect(process.env.DB)
  console.log("bruh")
  return handler(req, res)
}

export default connectDB