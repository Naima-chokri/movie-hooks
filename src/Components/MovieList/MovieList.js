import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({data,idDel}) => {
  return (
    <div className="wrapper">
         <div  style={{display:'flex', margin:'auto', flexWrap: 'wrap', justifyContent: 'center'}}>
        {/* <div style={{margin: 'auto', display: 'grid',  aligntems: 'start', gridTemplateColumns: '350px 351px 350px'}}> */}
        { data.map(el=><MovieCard  key={el.id} title={el.title} desc={el.desc} urlImage={el.urlImage} rating={el.rating} idDel={idDel}/>)}
        </div>
    </div>
  )
}


export default MovieList