
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import dotenv from "dotenv";

dotenv.config();

export const protectRoute = async (req, res, next) => {
    console.log("protectRoute");
	try {
        console.log("Cookies received:", req.cookies);
		const token = req.cookies.jwt;

		if (!token) {
			return res.status(401).json({ error: "Unauthorized: No Token Provided" });
		}

		console.log("JWT_SECRET:", process.env.JWT_SECRET);


		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		console.log("decoded",decoded)
		console.log( decoded.userId);


		if (!decoded) {
			return res.status(401).json({ error: "Unauthorized: Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		
		console.log("User from DB:", user);
		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}
		req.user = user;
		next();
	} catch (err) {
		console.log("Error in protectRoute middleware", err.message);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};


