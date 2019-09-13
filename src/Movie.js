import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster}){
    return (
        <div clas = "movie">
        <img src = {poster} alt = {title} tilte = {title} />
        <div class = "movie_data">
        <h3 class = "moive_title">{title}</h3>
        <h3 class = "moive_year">{year}</h3>
        <h3 class = "moive_summary">{summary}</h3>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;