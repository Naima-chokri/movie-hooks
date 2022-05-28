import React, { useState } from 'react'
import { data } from '../../dataMovies'
import './Filterbyrating.css'
import {  Form, FormControl, Button} from 'react-bootstrap'

const Filterbyrating = ({FilterMovieByRating}) => {
  const [ratingmin, setRatingmin] = useState(0)
  const [ratingmax, setRatingmax] = useState(10)

    const getRatingmin = (e) =>{
      (e.target.value===''?setRatingmin(0):setRatingmin(e.target.value))
        //setRatingmin(e.target.value)
    }
    const getRatingmax = (e) =>{
      (e.target.value===''?setRatingmax(10):setRatingmax(e.target.value))
        //setRatingmax(e.target.value)
    }
    
    FilterMovieByRating(ratingmin,ratingmax);
  return (
    <div  style={{display:'flex'}}>

      <Form className="inputstyle">
      <FormControl
        style={{width: '150px'}}
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="Raiting-min"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmin}     
        />
      </Form>
      <Form className="inputstyle">
      <FormControl
          style={{width: '150px'}}
          type="number"
          id="tentacles" 
          name="tentacles" 
          min="0"
          max="10"
          placeholder="Raiting-max"
          className="me-2"
          aria-label="Search"
          onChange={getRatingmax}     
        />
      </Form>
        {/* Raiting-min:<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmin} />
        Raiting-max<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmax} /> */}
    </div>
  )
}

export default Filterbyrating