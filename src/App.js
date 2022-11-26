import axios from 'axios';
import { useAsync } from 'react-async';

function App() {
  axios
    .get(
      'https://openapi.naver.com/v1/search/movie.json', // 불러올 api 주소
      {
        params: { query: '아이언맨' }, // query는 필수값
        headers: {
          'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
        },
      }
    )
    .then((response) => {
      console.log('response', response.data.itmes); // 영화 리스트
    });
  return <></>;
}

export default App;
