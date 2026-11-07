import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
connectDb();
console.log("Mongo URL:", process.env.MONGODB_URL);

const app = express();

// it totaly dpends on you , DO you want to give origion or not ?
// we give origion to our backend
app.use(cors({
    origin: process.env.CORS_ORIGION,
    credentials: true
}));

// it's totaly up to you whether give limits or not 
// we want to give limit to our server like how much \data you can take
app.use(express.json({
    limit: "16kb"
}));

// Ye url ke liye hai like aap agr chahe toh bta sakte hai kii url kaise handle krna hai
app.use(express.urlencoded({ extended: true, }));

// kayi baar hum chahte hai kuch pdf ya files store krna thar time we use it
// public is a folder name
app.use(express.static("public"));
    
app.use(cookieParser());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});


