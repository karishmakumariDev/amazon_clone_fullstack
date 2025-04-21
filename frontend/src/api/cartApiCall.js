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



  