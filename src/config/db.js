import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDb = async () => {
    try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
        
        console.log("database connected !");
        
    } catch (error) {
        console.log(`MONGODB Error ${error}`);
        process.exit(1);
    }
}