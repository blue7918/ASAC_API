// import React from 'react';
// import axios from 'axios';
// import SearchMovie from '../components/SearchMovie';
// import "./Home.css";
// import "./Search.css";
// import {naverMoviesApi} from '../api';

// class Search extends React.Component {
//   state = {
//     isLoading: true,
//     movies: [],
//     value: "",
//     name: ""
//   };

//   getSearchMovie = async () => {
//     console.log('search Movie');
//     const search = this.state.value;

//     try {
//       if (search === "") {
//         this.setState({movies: [], isLoading: false})
//       } else {
//         const {data: {
//             items
//           }} = await naverMoviesApi.search(search);
//         this.setState({movies: items, isLoading: false})
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // node server Proxy setting
//   getTest = async () => {
//     console.log('search Movie');
//     const search = this.state.value;
//     try {
//       if (search === "") {
//         this.setState({movies: [], isLoading: false})
//       } else {
//         const {data: {
//             items
//           // }} = await axios.get('http://ec2-15-164-100-174.ap-northeast-2.compute.amazonaws.com:3000/search',{
//           }} = await axios.get('https://openapi.naver.com/v1/search/movie.json?',{
//             params:{
//               query: search
//             }
//           });
//         console.log(items);
//         this.setState({movies: items, isLoading: false});
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   componentDidMount() {
//     //this.getSearchMovie();
//     this.getTest();
//   };

//   handleChange = (e) => {
//     //console.log(e.type + ":", e.target.value);
//     this.setState({value: e.target.value});
//     console.log(e.target.valule);
//   };

//   handleSubmit = (e) => {
//     //console.log(e.type + ":", this.state.value);
//     e.preventDefault();
//     //this.getSearchMovie();
//     this.getTest();
//   };

//   render() {
//     const {movies, isLoading, name} = this.state;

//     return (<section className="container">
//       {
//         isLoading
//           ? (<div className="loader">
//             <span className="loader__text">Loading..{this.state.name}</span>
//           </div>)
//           : (<form onSubmit={this.handleSubmit}>
//             <div>
//               <div className="input_div">
//                 <h1>영화 검색</h1>
//                 <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화를 검색해 보세요."/>
//               </div>
//               <div className="movies">
//                 {movies.map(movie => (<SearchMovie key={movie.link} id={movie.link} year={movie.pubDate} title={movie.title} poster={movie.image} rating={movie.userRating} director={movie.director} actor={movie.actor}/>))}
//               </div>
//             </div>
//           </form>)
//       }
//     </section>);
//   }
// }

// export default Search;

import React from 'react';
import axios from 'axios';
import SearchMovie from '../components/SearchMovie';
import Navbar from '../components/Navbar';
import './Home.css';
import './Search.css';


class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: '',
  };

  getSearchMovie = async () => {
    const search = this.state.value;
    try {
      if (search === '') {
        this.setState({ movies: [], isLoading: false });
      } else {
        const {
          data: {
            items,
            // }} = await axios.get('https://openapi.naver.com/v1/search/movie.json',{
          },
        } = await axios.get('/api/v1/search/movie.json', {
          params: {
            query: search,
            display: 10,
          },
          headers: {
            'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
            'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
          },
        });

        this.setState({ movies: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
    console.log('search: ' + search);
  };

  componentDidMount() {
    this.getSearchMovie();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.setState({ value: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchMovie();
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
      <Navbar></Navbar>
      <section className="container searchContainer">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading..</span>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <div className="input_div">
                <div className='input_search_title'>영화 검색</div>
                <input
                  className="input_search"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
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
      </>
    );
  }
}

export default Search;
