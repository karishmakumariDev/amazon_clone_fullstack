import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchUser,fetchUserlogin, getUserId } from '../api/apicall'; 
import { toast } from 'react-toastify'

export const useFetchUserRegister = () => {
  const mutation = useMutation({
    mutationFn: fetchUser,
    onSuccess: (data) => {
     console.log("API call success:", data); 
     toast.success("Account created successfully!"); 
    },
    onError: (error) => {
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message); 
    }
  });

  return mutation; 
};


export const useFetchUserForLogin = () => {
    const mutation = useMutation({
        mutationFn:fetchUserlogin,
        onSuccess:(data) => {
            console.log("API CALL SUCCES",data);
            toast.success("Login successfully")
        },
        onError: (error) => {
            const message = error.response?.data?.message || "Something went wrong";
            toast.error(message); 
        }
    }) 
    return mutation 
}

export const useFetchUserId = (id) => {
    return useQuery({
        queryKey: ["user", id], 
        queryFn: () => getUserId(id),
    });
};
