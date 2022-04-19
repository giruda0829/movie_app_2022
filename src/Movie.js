import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movies({ title, year, summary, poster }) {
  return (
  <div className="movie_data">
      <img src={poster} alt={title} title={title}></img>
      <h3 className="movie_title">{title}</h3>
      <h5 className="movie_year">{year}</h5>
      <p className="movie_summary">{summary}</p>
  </div>
  );
}

//title,summary,medium_cover_image->poster
Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;
