import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API,
});

export { api };
