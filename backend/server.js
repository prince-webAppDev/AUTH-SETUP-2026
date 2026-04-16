import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./configs/database.js";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});