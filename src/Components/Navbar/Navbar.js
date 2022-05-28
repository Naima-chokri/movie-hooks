import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import Filter from '../Filter/Filter'
import Filterbyrating from '../Filterbyrating/Filterbyrating'
import MovieAdd from '../MovieAdd/MovieAdd'

const NavbarAll = ({NewMovie,FilterMovie,FilterMovieByRating}) => {
  
  return (
    <>
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <MovieAdd NewMovie={NewMovie}/>
      </Nav>
      <Filter FilterMovie={FilterMovie}/>
      <Filterbyrating FilterMovieByRating={FilterMovieByRating} />
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavbarAll