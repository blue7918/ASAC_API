import React, { Component } from "react";
import ChartMovie from "./ChartMovie";

function getToday(){
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + (date.getDate()-1)).slice(-2);

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
    const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
      return (
        <ChartMovie
          rank={dailyBoxOfficeList.rank}
          movieNm={dailyBoxOfficeList.movieNm}
          key={index}
        />
      );
    });
    return movies;
  };
 
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };
 
  _callApi = () => {
    return fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=5`
    )
      .then(a => a.json())
      .then(json => json.boxOfficeResult.dailyBoxOfficeList)
      .catch(err => console.log(err));
  };
 
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "Chart" : "Chart-loading"}>
        {movies ? this._renderMovies() : "로딩중 ..."}
      </div>
    );
  }
}
 
export default Chart;