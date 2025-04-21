import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";

export const registerUser = async (req, res) => {
  try {
    console.log("Calling register");
    console.log(req.body);

    const { firstname, email, password, mobile } = req.body;

    console.log("firstName", firstname);
    console.log("email", email);
    console.log("password", password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("emailRegex", emailRegex);
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (!firstname || !email || !password || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    console.log("existingUser", existingUser);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    if (mobile) {
      const existingMobile = await User.findOne({ mobile });
      if (existingMobile) {
        return res
          .status(400)
          .json({ message: "Mobile number already in use" });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashedPassword", hashedPassword);

    const newUser = new User({
      firstname,
      email,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        _id: newUser._id,
        firstname: newUser.firstname,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    });
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    // console.log(user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("user._id",user._id)
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        firstname: user.firstname,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.error("Error while logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserId = async (req, res) => {
    console.log("get user id");
  
    try {
      console.log(req.params._id)  
      const id = req.params._id;
      console.log("id", id);
  
      const userId = await User.findById(id);
      console.log("userId", userId);
  
      if (!userId) {
        return res.status(400).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User found", user: userId });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  