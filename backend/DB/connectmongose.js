import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectmongose = async () => {
    console.log("process env", process.env.MONGO_URI);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectmongose;






//mongodb+srv://<db_username>:<db_password>@cluster0.7suisdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//username = kumarikarishma311329
//password = K4kGIld5i0bZEJNH