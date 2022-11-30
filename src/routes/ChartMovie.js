import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchOneTemp from "./SearchOneTemp";
function ChartMovie({ rank, movieNm }) {
  return (
    <div className="ChartMovie">
      <h1>
        {rank}위:{movieNm}
        <SearchOneTemp movieNm={movieNm}></SearchOneTemp>
      </h1>
    </div>
  );
}
 
ChartMovie.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};


export default ChartMovie;