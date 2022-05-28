import React, { useState } from 'react'
import {  Form, FormControl, Button} from 'react-bootstrap'


const Filter = ({FilterMovie}) => {
  const [title, setTitle] = useState('')
  const onChange=(e)=>{
    setTitle((e.target.value))
  }
  FilterMovie(title)    //yab3eth data to callback
  return (
    <Form className="d-flex">
       <FormControl 
          style={{width: '350px'}}
          type="search"
          placeholder=" Find Movie"
          className="me-2"
          aria-label="Search"
          onChange={onChange}
          value={title}
        />
      </Form>
  )
}

export default Filter