
import User from "../models/userSchema.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const generateTokenAndSetCookie = async (user, res) => {
    const userId = user._id.toString();
    console.log("userId", userId);
    console.log("generateTokenAndSetCookie");

    const token = jwt.sign({ userId }, process.env.JWT_SECRET);
    console.log("token generate", token);
    
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "Strict",
        secure: false,
    });
     
    console.log("Cookie Set:", res.getHeaders()['set-cookie']);
     
    const dbUser = await User.findById(userId);
    console.log(dbUser);

    if (dbUser) {
        dbUser.tokens = dbUser.tokens || [];
        dbUser.tokens.push({ token });
        await dbUser.save();
        console.log("JWT Token stored in DB and Cookie Set");
    } else {
        console.log("User not found while saving token");
    }
};
