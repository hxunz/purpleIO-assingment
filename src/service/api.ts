import axios from 'axios';

const BASE_URL = 'http://localhost:9000';

export const httpClient = axios.create({
  baseURL: BASE_URL,
});
