import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { getcartListLenght, fetchAddToCart } from "../api/cartApiCall";
import { toast } from "react-toastify";



export const useFetchgetLengh = () => {
  return useQuery({
    queryKey:["cartLength"],
    queryFn:getcartListLenght
  })
}

export const useFetchAddtocart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetchAddToCart,
    onSuccess: (data) => {
     console.log("API call success:", data); 
     toast.success(" Add to cart"); 

     queryClient.invalidateQueries({ queryKey: ["cartLength"] });
    },
    onError: (error) => {
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message); 
    }
  });

  return mutation; 
};
