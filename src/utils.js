import axios from 'axios';

const customFetch = axios.create({
  // Base URL
  baseURL: 'https://api.unsplash.com/search/photos',
});

export default customFetch;
