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

    const quantity = 1;
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


// get lenght 

export const getLength = async (req, res) => {
  console.log("get length");

  try {
    console.log("userExisting", req.user);
    console.log("req.user", req.user._id);

    const userId = req.user._id;
    console.log("userId", userId);

    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = await Cart.findOne({ userId });
    console.log("cart", cart);

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartLength = cart.cartList.length;
    console.log("cartLength", cartLength);

    return res.status(200).json({ cartLength });
  } catch (error) {
    console.error("Error getting cart length:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


// showing the cartList
 export const showingCartList = async (req, res) => {
  console.log("get cartlist");

  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = await Cart.findOne({ userId }).populate("cartList.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const cartList = cart.cartList.map(item => {
      return {
        productId: item.productId,   
        quantity: item.quantity
      };
    });

    return res.status(200).json({ cartList });

  } catch (error) {
    console.error("Error in showingCartList:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const increaseQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log("userId", userId)
    const { productId } = req.body;

    if (!userId || !productId) {
      return res.status(400).json({ message: "User ID or Product ID missing" });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.cartList.find((item) => item.productId === productId);

    if (item) {
      item.quantity += 1;
    } else {
      cart.cartList.push({ productId, quantity: 1 });
    }

    await cart.save();

    res.status(200).json({ message: "Quantity increased", cart });

  } catch (err) {
    console.error("Error in increaseQuantity:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};



export const decreaseQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;

    const cart = await Cart.findOne({ userId });

    const item = cart.cartList.find((item) => item.productId === productId);
    console.log("item",item);

    if (item) {
      item.quantity = Math.max(1, item.quantity - 1); 
    }

    await cart.save();

    res.status(200).json({ message: "Quantity decreased", cart });

  } catch (err) {
    console.error("Error in decreaseQuantity:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
