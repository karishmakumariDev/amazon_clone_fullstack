import products from "../content/productsData.js";
import Product from "../models/ProductSchema.js";
//console.log("products outside ",products)
export const postProducts = async (req, res) => {
  console.log("Inside postProducts function");
  //console.log("products inside",products);
  try {
    const existProduct = await Product.find();

    if (existProduct.length > 0) {
      console.log("data esixt hai", existProduct);

      return res.status(200).json({ message: "data already exiting" });
    }

    await Product.insertMany(products);
    console.log("product inserted succesfully");
    res.status(200).json({ message: "product inserted succesfully" });
  } catch (error) {
    console.error("Error inserting products:", error);
    res.status(500).json({ message: "Error inserting products", error });
  }
};


export const getProducts = async (req, res) => {
  try {
    console.log("get produst");
    const products = await Product.find();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.error("Error while fetching products:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};


// export const getproductid = async (req, res) => {
//     try {
//       const { id } = req.params;
//       console.log("Get Product By ID:", id);
  
//       const product = await Product.findOne({ id: id });
  
//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }
  
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ message: "Error while getting product", error });
//     }
//   };
  