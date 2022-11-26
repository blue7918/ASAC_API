// import axios from 'axios';
// import { useAsync } from 'react-async';

// function search(){
//   axios.get(
//     'https://openapi.naver.com/v1/search/movie.json', // 불러올 api 주소
//     {
//       params: { query: '아이언맨' }, // query는 필수값
//       headers: {
//         'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
//         'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
//       },
//     }
//   )
//   .then((response) => {
//     console.log('response', response.data.itmes); // 영화 리스트
//   });
//   return(
//     <></>
//   );
// }

// export default search;

import React from 'react';
import axios from "axios";
import Movie from "./movie";
import "./search.css";

class search extends React.Component{
  state = {
    isLoading: true,
    movies: [],
    value: ""
  };
  
  getMovies = async() => {
    // const ID_KEY = 'sNxTbgnt_IcCpjBvC1Cd';
    // const SECRET_KEY = 'r7C6l7qZRA';
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: { items }
        } = await axios.get(
            '/v1/search/movie.json' ,{
            params:{
              query: search,
              display: 10
            },
            headers: {
              'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
              'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
            }
        });
  
        this.setState({ movies: items, isLoading: false });
      } 
    } catch (error) {
      console.log(error);
      console.log('11');
    }
  };

  componentDidMount() {
    this.getMovies();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  };


  render() {
    const { isLoading, movies } = this.state;
    return (
        <section className="container">
            {isLoading ? (
              <div className="loader">
                <span className="loader_text">Loading...</span>
              </div>
            ) : (<form onSubmit={this.handleSubmit}>
              <div className="input_div">
                <h1>영화 검색</h1>
                <input
                  className="input_search"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="영화를 검색해 보세요."/>
              </div>
              <div className="movies">
                {movies.map(movie => (
                  <Movie
                    id={movie.link}
                    title={movie.title}
                    poster={movie.image}
                    actors={movie.actor}
                    year={movie.pubDate}
                  />
                ))}
              </div>
            </form>)}
        </section>
    );
  }
}

export default search;