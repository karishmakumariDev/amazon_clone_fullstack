import Cart from "../models/CartSchema.js";
import User from "../models/userSchema.js";
import Product from "../models/ProductSchema.js";
export const AddToCart = async (req, res) => {
  try {
    console.log("Add-To-Cart");
    console.log("userExisting", req.user);
    console.log("req.user", req.user._id);

    const userId = req.user._id;
    console.log("userId", userId);

    if (!userId) {
      res.status(400).json({ message: "userId not found" });
    }

    const product = await Product.findById(req.params._id);
    if (!product) {
      res.status(400).json({ message: "product not found" });
    }
    const productId = product._id;
    console.log("productId", productId);

    const quantity =  1;
    console.log("quantity", quantity);

    let cart = await Cart.findOne({ userId });
    console.log("cart", cart);

    if (!cart) {
      cart = new Cart({
        userId,
        cartList: [{ productId, quantity }],
      });
    } else {
      const productIndex = cart.cartList.findIndex(
        (item) => item.productId.toString() === productId.toString()
      );

      if (productIndex > -1) {
        cart.cartList[productIndex].quantity += quantity;
      } else {
        cart.cartList.push({ productId, quantity });
      }
    }

    await cart.save();
    return res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error("AddToCart Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
