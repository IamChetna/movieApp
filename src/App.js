
import React, { useEffect, useState } from "react";
import "./App.css";
 
 
function Searchbar(props) {
  return (
    <div class="searchbar">
      <input value={props.searchvalue} onChange={(event)=>props.setSearchValue(event.target.value)} type="text" id="searchitem" placeholder="search your movie"></input>
      {/* <button onClick={(event)=>props.setSearchValue(event.target.value)} id="searchitem" >search</button> */}
    </div>
  );
}
 
 
 
function Movie(props){
  return(
    <>
  <div className="movie_div">
    <div className="movie">
      <img src={props.src} alt="poster not found"/>

      <div>
      <h6>{props.name}</h6>
      </div>
      <div>
      <h6>{props.date}</h6>
      </div>
         <div>
      <h6>{props.Year}</h6>
      </div>
    </div>
    </div>
    </>
  )
}
 
function App() {
  let [Movies, setMovies] = useState([]);
  let [searchValue, setSearchValue] = useState('');
 
  const getmovierequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    const url_encode = encodeURI(url);
 
		const response = await fetch(url_encode);
		const responseJson = await response.json();
 
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
 
  useEffect(()=> {
    getmovierequest(searchValue);
  }, [searchValue])
 
  return (
    <>
     <div className="title">
      <h1>MOVIES APP</h1>
      <Searchbar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
       <div className="list">
         {Movies.map((movie) =>{
          return < Movie  date ={movie.Year} src = {movie.Poster} name ={movie.Title} />
         })}
         </div>
      
    </>
  );
}
 
export default App;