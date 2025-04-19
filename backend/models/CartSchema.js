import mongoose from "mongoose";
import Product from "./ProductSchema";
import User from "./userSchema";

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },

  cartList: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true
      },

      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

const Cart =  mongoose.model("Cart", CartSchema);
export default Cart

