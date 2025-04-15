import dotenv from "dotenv";
import connectmongose from "./DB/connectmongose.js";
import express from "express";
import productRoutes from "./routes/product.routes.js"
import "./DB/connectmongose.js"
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.routes.js"



dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = 8000;

app.get("/check", (req, res) => {
    res.json({message: "backend working"});
} )
app.use("/api", productRoutes);
app.use("/api/auth", authRoutes);
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
