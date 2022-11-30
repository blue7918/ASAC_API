import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import './Search.css';

const SearchOne = () => {
  const [isLoading, setIsLoading] = useState('true');
  const [movies, setMovies] = useState([]);
  const [getValue, setGetValue] = useState('');

  const getSearchMovie = async () => {
    const search = getValue;
    try {
      if (search === '') {
        // this.setState({ movies: [], isLoading: false });
        setMovies([]);
        setIsLoading('false');
      } else {
        const {
          data: { items },
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
        console.log('search: ' + search);
        console.log('movies: ' + movies);
        setMovies(items);
        setIsLoading('false');
        // this.setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchMovie();
  }, []);

  const handleChange = (data) => {
    setGetValue(data);
    console.log(getValue);
    // this.setState({ value: e.target.value });
    // console.log(this.setState({ value: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchMovie();
  };

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading..</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input_div">
              <h1>영화 검색</h1>
              <input
                className="input_search"
                type="text"
                value={(e) => setGetValue(e.target.value)}
                onChange={handleChange}
                placeholder="영화를 검색해 보세요."
              />
            </div>
            <div className="movies">
              {movies.map((movie) => (
                <SearchMovie
                  key={movie.link}
                  id={movie.link}
                  year={movie.pubDate}
                  title={movie.title}
                  poster={movie.image}
                  rating={movie.userRating}
                  director={movie.director}
                  actor={movie.actor}
                />
              ))}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default SearchOne;
