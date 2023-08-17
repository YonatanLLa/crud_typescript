import mongoose, { connect } from "mongoose";
import { MONGO_URI } from "../configs/index";

export const connectDB = async () => {
    mongoose.set("strictQuery", false);
    await connect((MONGO_URI as string));
    console.log("Connected to MongoDB");
    
}