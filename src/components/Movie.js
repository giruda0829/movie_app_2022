import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"
import {Link} from "react-router-dom"

function Movies({ title, year, summary, poster ,genres}) {
  return (
  <div className="movie_data">
      <Link to={{pathname:"/movie-detail",state:{year,title,summary,poster,genres}}}>
        <img src={poster} alt={title} title={title}></img>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre,index)=>{
            return <li key={index} className="movie_genre">{genre}</li>
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </Link>
  </div>
  );
}

//title,summary,medium_cover_image->poster
Movies.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};

export default Movies;
