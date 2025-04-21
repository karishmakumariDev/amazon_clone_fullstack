import Cart from "../models/CartSchema.js";
import User from "../models/userSchema.js";
export const AddToCart = async(req, res) => {
  console.log("Add-To-Cart");
  console.log("userExisting",req.user);
  console.log("req.user",req.user._id );

  const userId = req.user._id;
  console.log("userId", userId)

  const cart = Cart.findOne({})
}
