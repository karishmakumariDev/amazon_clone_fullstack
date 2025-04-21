import { useMutation } from "@tanstack/react-query";
import { fetchAddToCart } from "../api/cartApiCall";
import { toast } from "react-toastify";


export const useFetchAddtocart = () => {
  const mutation = useMutation({
    mutationFn: fetchAddToCart,
    onSuccess: (data) => {
     console.log("API call success:", data); 
     toast.success(" Add to cart"); 
    },
    onError: (error) => {
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message); 
    }
  });

  return mutation; 
};