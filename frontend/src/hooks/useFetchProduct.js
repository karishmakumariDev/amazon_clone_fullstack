
import { useQuery } from '@tanstack/react-query';
import {  fetchUsers,getByProductId } from '../api/apicall'

export const useFetchProduct = () => {
  return useQuery({
    queryKey: ['products'],  
    queryFn: fetchUsers,   
  });
};

export const useFetchByProductId = (_id) => {
  return useQuery({
    queryKey: ['products', _id],
    queryFn: () => getByProductId(_id),
  });
};


