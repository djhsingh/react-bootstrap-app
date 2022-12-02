import { Link } from "react-router-dom";
import '../App.css';
const MovieCard = ({movie}) => {
    const posterUrl = 'https://image.tmdb.org/t/p/original/'+movie.poster_path;
    const movieUrl = `/movies/${movie.id}`;
    return(
        <div className="col-3">
            <div className="card" style={{width:`15rem`}}>
            <img src={posterUrl} alt={movie.release_date}></img>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={movieUrl} className="btn btn-primary">Go somewhere</Link>
            </div>
            </div>
        </div>
    )
}
const Search = ({searchText,searchResults}) =>{

    
    const renderHTML = searchResults.map((obj,i)=>{
        return <MovieCard movie={obj} key={i}/>
    })

    return (
      <>
        <div className="container">
            <h2>You are searching for {searchText}</h2>
            <div className="row">
                {renderHTML}
            </div>
        </div>
      </>
    );
  
 } 
  export default Search;