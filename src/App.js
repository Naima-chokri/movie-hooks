import './App.css';
import MovieList from './Components/MovieList/MovieList';
import {data} from './dataMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieAdd from './Components/MovieAdd/MovieAdd';
import { useState } from 'react';
import Navbar  from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [newData, setNewData] = useState(data)
  const [filterx, setFilterx] = useState("")
  const [filterxratingmin, setFilterxratingmin] = useState(0)
  const [filterxratingmax, setFilterxratingmax] = useState(10)
  const NewMovie=(x)=>{
   setNewData([...newData,x])
  // setNewData([...newData,{...x,id:newData.length}])
  } 
  const deleteMovie=(idDel)=>{
      console.log(idDel)
  }
  const FilterMovie = (x) =>{  ///title ta3 input = x
    setFilterx(x)
    
    //
  }
  const handleDclick=()=>{
    setNewData([])  //we can't put null cause it's an array of object and we can't map 'null'
  }
  const FilterMovieByRating = (x,y) =>{
    setFilterxratingmin(x)
    setFilterxratingmax(y)
  }
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Home />}> */}
        {/* <Route path='/' element={<Home />}> */}
        {/* </Route>
      </Routes> */}

    <Navbar NewMovie={NewMovie} FilterMovie={FilterMovie} FilterMovieByRating={FilterMovieByRating}/>
      
     <MovieList data={newData.filter(el=>
      (el.title.toLocaleLowerCase().includes(filterx.trim().toLocaleLowerCase())
      &&(el.rating>=filterxratingmin)
      &&(el.rating<=filterxratingmax))
      )}/> 
       {/* <button onDoubleClick={handleDclick}>Clear all</button>  */}
       
    </div>
  );
}

export default App;
