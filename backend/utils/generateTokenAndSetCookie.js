
import User from "../models/userSchema.js"; // import User
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
 dotenv.config();

export const generateTokenAndSetCookie = async (userId, res) => {
    console.log("userId",userId)
    console.log("generateTokenAndSetCookie");

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    console.log("token generate", token);
    
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: false 
    });
     
    console.log("Cookie Set:", res.getHeaders()['set-cookie']);
     
     const user = await User.findById(userId);
     if (user) {
         user.tokens = user.tokens || [];
         user.tokens.push({ token });
         await user.save();
         console.log("JWT Token stored in DB and Cookie Set");
     } else {
         console.log("User not found while saving token");
     }

};
