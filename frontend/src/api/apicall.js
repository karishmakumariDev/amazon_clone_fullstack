import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/getproduct');
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};





// export const getByProductId = async (id) => {
//     try {
//       const response = await axios.get(`/api/getproduct/${id}`);
//       console.log("response data", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("API error:", error);
//       throw error;
//     }
//   };


export const fetchUser = async (userData) => {
  try {
    console.log("Calling API with:", userData); 

    const response = await axios.post('/api/auth/register', userData);
    console.log("API Response:", response.data); // Optional
    return response.data;
  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
    throw error;
  }
};

export const fetchUserlogin = async (userData) => {
  try {
    console.log("Calling API with:", userData); 

    const response = await axios.post('/api/auth/login', userData);
    console.log("API Response:", response.data); 
    return response.data;
  } catch (error) {
    console.error("API error:", error.response?.data || error.message);
    throw error;
  }
};
