import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlusSquare } from 'react-icons/fa';
// import { FaPlusCircle } from 'react-icons/fa';

function ChartMovie({ rank, movieNm }) {
  return (
    <div>
      <div>
        <SearchOneTemp
          movieNm={movieNm}
          style={{ position: 'relative' }}
        ></SearchOneTemp>
        <RankWrapper>
          <Rank>{rank}</Rank>
        </RankWrapper>
        <PlusButton></PlusButton>
        {rank}위:{movieNm}
      </div>
    </div>
  );
}

ChartMovie.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
};

function SearchOneTemp({ movieNm }) {
  const search = movieNm;
  const [movies, setMovies] = useState([]);
  const getSearchMovie = async () => {
    try {
      const {
        data: {
          items,
          // }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{
        },
      } = await axios.get('/api/v1/search/movie.json', {
        params: {
          query: search,
          display: 1,
        },
        headers: {
          'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
          'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
        },
      });
      setMovies(items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSearchMovie();
  }, []);
  console.log(movies);

  return (
    <>
      {movies.map((movie) => (
        <ItemBox key={movie.link} id={movie.link}>
          <ImgBox>
            <Poster src={movie.image} />
            {/* <Description>{movieNm}</Description> */}
          </ImgBox>
        </ItemBox>
      ))}
    </>
  );
}

export default ChartMovie;

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 240px;
`;
const ImgBox = styled.div`
  width: 200px;
  height: 240px;
`;
const Poster = styled.img`
  width: 143px;
  height: 204px;
  border-radius: 8px;
`;

const Description = styled.div`
  width: 200px;
  height: 240px;
`;
const RankWrapper = styled.div`
  position: fixed;
  top: 16px;
  background-color: orange;
  width: 26px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Rank = styled.div`
  color: white;
  font-size: 18px;
`;

const PlusButton = styled(FaPlusSquare)`
  width: 30px;
  height: 30px;
  color: orange;
  background-color: white;
  border-radius: 5px;
  /* padding: 0.5px; */
  position: fixed;
  top: 174px;
  margin-left: 112.98px;
`;
