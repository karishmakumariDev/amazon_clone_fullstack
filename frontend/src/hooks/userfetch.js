import { useMutation } from '@tanstack/react-query';
import { fetchUser } from '../api/apicall'; 
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
        mutationFn:useFeach
    }) 
}