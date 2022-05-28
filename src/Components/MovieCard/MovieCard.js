import React from 'react'
import ReactStars from 'react-stars'
import './MovieCard.css'

const MovieCard = ({title,urlImage, desc, date, duration, genres, actors, rating}) => {
  return (
    <div className="card">
    <img src= {urlImage} />
    <div className="descriptions">
      <h1>{title}</h1>
      <ReactStars value= {rating} count={10}/>
      <p>{desc}</p>
      <button>
        <i className="fab fa-youtube" />
        Show More
      </button>
      
    </div>
  </div>
  )
}

export default MovieCard