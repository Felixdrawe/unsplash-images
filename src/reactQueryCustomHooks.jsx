import { useQuery } from '@tanstack/react-query';
import customFetch from './utils';

export const useFetchImages = (query) => {
  const clientId = import.meta.env.VITE_UNSPLASH_CLIENT_ID;

  // Call useQuery and store the return values
  const { isLoading, data, error } = useQuery({
    queryKey: ['searchImages', query],
    queryFn: async () => {
      const response = await customFetch.get(
        `?page=1&query=${query}&per_page=12&client_id=${clientId}`
      );
      // console.log('API Response:', response.data.results);
      return response.data.results;
    },
    enabled: !!query, // Only run query if `query` is not empty
  });

  // Return the query result
  return { isLoading, data, error };
};
