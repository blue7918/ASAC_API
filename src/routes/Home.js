import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';
import Chart from './Chart';
import Navbar from '../components/Navbar';
import ButtomWrapper from '../components/first-page/ButtomWrapper';
// import styled from 'styled-components';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    //movies.data.data.movies == {data: {data: { movies } } }
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=like_count'
    );
    //this.setState({movies:movies, isLoading: false})
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          <div>
            <Navbar></Navbar>
            <Chart></Chart>
            <div className="movies">
              {/* {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  rating={movie.rating}
                />
              ))} */}
              <ButtomWrapper />
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
