import React, { useState } from 'react'
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap'

const MovieAdd = ({NewMovie}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [rating, setRating] = useState('');

    const getTitle=(e) => {
        setTitle(e.target.value)
    }
    const getDesc=(e) => {
        setDesc(e.target.value)
    }
    const getImage=(e) => {
        setImage(e.target.value)
    }
    const getRating=(e) => {
        setRating(e.target.value)
    }
    const handleSave=()=>{
        NewMovie({title:title,desc:desc,urlImage:image,rating:rating})
        handleClose()
    }
    
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ width: '150px'}}>
        Add Movie
      </Button>

      <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Add New Movie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <InputGroup className="mb-3">
                <FormControl
                placeholder="Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={getTitle}
               
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="Description"
                aria-label="desc"
                aria-describedby="basic-addon1"
                onChange={getDesc}
               
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="urlImage"
                aria-label="urlImage"
                aria-describedby="basic-addon1"
                onChange={getImage}
                />
                </InputGroup>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="rating"
                aria-label="rating"
                aria-describedby="basic-addon1"
                onChange={getRating}
                />
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button onClick={handleSave} variant="primary">Save</Button>
              </Modal.Footer>
            </Modal>
    </>
  )
}

export default MovieAdd