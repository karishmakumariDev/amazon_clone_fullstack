import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";


export const fetchAddToCart = async (_id) => {
  try {
    const response = await axios.post(
      `/api/cart/addtocart/${_id}`,
      null, 
      {
        withCredentials: true 
      }
    );
    return response.data;
  } catch (error) {
    console.log("API ERROR", error);
    throw error;
  }
};

export const getcartListLenght = async () => {
  try {
    const response = await axios.get("/api/cart/getcartLength", {
      withCredentials: true
    });
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    console.log("api not calling", error);
    throw error;
  }
};

export const getCartList = async () => {
  try {
    const response = await axios.get("/api/cart/showCartList", {
      withCredentials: true  
    });
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    console.log("API call failed:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const increseqan = async (productId) => {
  try {
    const response = await axios.patch("/api/cart/increaseQuantity", { productId },{
      withCredentials: true  
    });
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    console.log("API call failed:", error.response ? error.response.data : error.message);
    throw error;
  } 
}

export const decreaseQuan = async(productId) => {
  try {
    const response = await axios.patch("/api/cart/decreaseQuantity",{productId}, {
      withCredentials: true  
    });
    console.log("response data", response.data);
    return response.data;
  } catch (error) {
    console.log("API call failed:", error.response ? error.response.data : error.message);
    throw error;
  } 
}