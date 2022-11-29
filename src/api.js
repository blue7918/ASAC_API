import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
    'Access-Control-Allow-Origin': '*'
  }
});

export const naverMoviesApi = {
  search: word => api.get('/v1/search/movie.json', {
    params: {
      query: word,
      display: 20
    }
  })
};
