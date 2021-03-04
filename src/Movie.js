import React from 'react';
import axios from 'axios';
import PropType from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster,genres}){
  return <div class="movie">
    <img src={poster} alt={title} title={title}/>
    <div class="movie__data">
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  </div>
}

Movie.PropType = {
  id:PropType.number.isRequired,
  year:PropType.number.isRequired,
  title:PropType.string.isRequired,
  summary:PropType.string.isRequired,
  poster:PropType.string.isRequired,
  genres:PropType.arrayOf(PropType.string).isRequired
}

export default Movie;
