import dotenv from "dotenv";
import connectmongose from "./DB/connectmongose.js";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000;



async function startServer() {
    try {
        await connectmongose();
        startNodeServer();
    } catch (err) {
        console.log("Error while starting server:", err.message);
    }
}

function startNodeServer() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
