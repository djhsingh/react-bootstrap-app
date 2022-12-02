import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";

function MovieView() {

  const {id} = useParams();
  const [movieData,setMovieData] = useState([]);
  const [posterURL,setPosterURL] = useState([]);
  const [backdropURL,setBackdropURL] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
   if(id){
    fetch('https://api.themoviedb.org/3/movie/'+id+'?api_key=ac1ccbe8250334b34fd9ec4876616da4')
  .then(response => response.json())
  .then(json =>{
    setMovieData(json)
    setIsLoading(false)
    setPosterURL('https://image.tmdb.org/t/p/original/'+json.poster_path);
    setBackdropURL('https://image.tmdb.org/t/p/original/'+json.backdrop_path);
    console.log(json)
  })
   }
  },[id])

    function renderMovies(){
      if(isLoading){
        return(
          <Hero text="Loading...."></Hero>
        )
      }
      if(movieData){
        return (
          <>
            <Hero text={movieData.original_title} backdropURL={backdropURL} />
               <div className="container">
                  <div className="row my-5">
                      <div className="col-4">
                          <div className="card" style={{width:`15rem`}}>
                            <img src={posterURL} alt={movieData.release_date} className="card-img-top"></img>
                          </div>
                      </div>
                      <div className="col-8">
                            <h4>Movie Name: {movieData.title}</h4>
                            <h4>Overview</h4>
                            <p>{movieData.overview}</p>
                            <h4>IMDB ratings: {movieData.vote_average}</h4>
                            <h4>Release Date: {movieData.release_date}</h4>
                      </div>
                  </div>
               </div>
          </>
        );
      }
    }
    
    return renderMovies();
 } 
  export default MovieView;