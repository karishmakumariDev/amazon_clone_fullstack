
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/apicall'

export const useFetchProduct = () => {
  return useQuery({
    queryKey: ['products'],  
    queryFn: fetchUsers,   
  });
};
