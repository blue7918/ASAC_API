import React, { Component } from 'react';
import ChartMovie from './ChartMovie';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ('0' + (1 + date.getMonth())).slice(-2);
  var day = ('0' + (date.getDate() - 1)).slice(-2);

  return year + month + day;
}
const res = getToday();
const key = process.env.REACT_APP_CHART_KEY;
class Chart extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    var settings = {
      dots: false, // 캐러셀의 점을 보여줄 것인지
      infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
      slidesToShow: 4.5,
      slidesToScroll: 1,
      center: true,
      // centerPadding: '19vw',
      centerMode: true,
      nextArrow: <Next />,
      prevArrow: <Prev />,
    };

    const movies = this.state.movies;
    console.log(movies);
    return (
      <Wrapper>
        <StyledSlider {...settings}>
          <ChartMovie
            rank={movies[0].rank}
            movieNm={movies[0].movieNm}
            key={movies[0].index}
          />
          <ChartMovie
            rank={movies[1].rank}
            movieNm={movies[1].movieNm}
            key={movies[1].index}
          />
          <ChartMovie
            rank={movies[2].rank}
            movieNm={movies[2].movieNm}
            key={movies[2].index}
          />
          <ChartMovie
            rank={movies[3].rank}
            movieNm={movies[3].movieNm}
            key={movies[3].index}
          />
          <ChartMovie
            rank={movies[4].rank}
            movieNm={movies[4].movieNm}
            key={movies[4].index}
          />
          <ChartMovie
            rank={movies[5].rank}
            movieNm={movies[5].movieNm}
            key={movies[5].index}
          />
          <ChartMovie
            rank={movies[6].rank}
            movieNm={movies[6].movieNm}
            key={movies[6].index}
          />
          <ChartMovie
            rank={movies[7].rank}
            movieNm={movies[7].movieNm}
            key={movies[7].index}
          />
          <ChartMovie
            rank={movies[8].rank}
            movieNm={movies[8].movieNm}
            key={movies[8].index}
          />
          <ChartMovie
            rank={movies[9].rank}
            movieNm={movies[9].movieNm}
            key={movies[9].index}
          />
        </StyledSlider>
      </Wrapper>
    );
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=10`
    )
      .then((a) => a.json())
      .then((json) => json.boxOfficeResult.dailyBoxOfficeList)
      .catch((err) => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'Chart' : 'Chart-loading'}>
        {movies ? this._renderMovies() : '로딩중 ...'}
      </div>
    );
  }
}

export default Chart;

const Wrapper = styled.div`
  width: 83vw;
  margin-top: 80px !important;
  overflow: hidden;
  margin: 0 auto;
`;
const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -50px;
    margin-top: 200px;
  }
  .slick-slide div {
    outline: none;
  }
  width: inherit;
  overflow: hidden;
  position: relative;
`;

const ItemBox = styled.div`
  display: flex;
  width: 100px;
  height: 200px;
`;
const NextArrow = styled.div`
  top: 170px;
  left: 93.6vw;
  position: fixed;
  width: 1.5625rem;
  height: 1.5625rem;
`;
const PrevArrow = styled.div`
  top: 170px;
  left: 3.4375rem;
  width: 1.5625rem;
  height: 1.5625rem;
  position: fixed;
`;

const Next = (props) => {
  const { topNextArrow, style, onClick } = props;
  return (
    <NextArrow type="button" onClick={onClick}>
      <FaChevronCircleRight
        style={{
          width: '25px',
          height: '25px',
          color: 'rgba(217, 219, 249, 0.7)',
        }}
      />
    </NextArrow>
  );
};

const Prev = (props) => {
  const { topPrevArrow, style, onClick } = props;
  return (
    <PrevArrow type="button" onClick={onClick}>
      <FaChevronCircleLeft
        style={{
          width: '25px',
          height: '25px',
          color: 'rgba(217, 219, 249, 0.7)',
        }}
      />
    </PrevArrow>
  );
};
