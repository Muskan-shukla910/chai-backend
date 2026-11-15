
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import { app } from "./app.js";

dotenv.config();
connectDb();
console.log("Mongo URL:", process.env.MONGODB_URL);

const PORT = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.send("Backend is running")
});
app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});


