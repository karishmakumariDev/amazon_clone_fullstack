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


  

