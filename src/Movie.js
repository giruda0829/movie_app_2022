import React from "react";
import PropTypes from "prop-types";

function Movies(){
    return <h1></h1>
}

//title,summary,medium_cover_image->poster
Movies.propTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
};

export default Movies;