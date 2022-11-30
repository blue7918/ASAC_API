import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Home.css';
import './Search.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

const SearchOneTemp = ({ movieNm }) => {
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

  var settings = {
    dots: false, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 20, // 넘어가는 속도는 몇으로 할 것인지
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    // centerPadding: '19vw',
    centerPadding: '310px',
    centerMode: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };

  return (
    <Wrapper>
      {/* <Container> */}
        <StyledSlider {...settings}>
          {/* {movies.map((movie) => (
            <ItemBox key={movie.link}
            id={movie.link}>
              <div>{movieNm}</div>
              <img src={movie.image} />
            </ItemBox>
          ))} */}
          <ItemBox>
            <div>{movieNm}</div>
            <img src={movies[0].image} />
          </ItemBox>
        </StyledSlider>
      {/* </Container> */}
    </Wrapper>
  );
};

export default SearchOneTemp;

const Next = (props) => {
  const { topNextArrow, style, onClick } = props;
  return (
    <button type="button" className="topNextArrow topArrow" onClick={onClick}>
      <span className="SvgIconRoot">
        <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </span>
    </button>
  );
};

const Prev = (props) => {
  const { topPrevArrow, style, onClick } = props;
  return (
    <button type="button" className="topPrevArrow topArrow" onClick={onClick}>
      <span className="SvgIconRoot">
        <svg className="root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
        </svg>
      </span>
    </button>
  );
};
const Wrapper = styled.div`
  width: 98.8vw;
  overflow: hidden;
`;
const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
  .slick-slide div {
    outline: none;
  }
  width: 100vw;
  overflow: hidden;
`;

const ItemBox = styled.div`
display: flex;
width: 6rem;
height: 10rem;
`;
