import { Link } from "react-router-dom";
import { movies } from "../../MovieData/data";
import "./Movies.css"

function Movies(){
    return(
        <div className="container">
            {movies.map((movie)=>(
                <div className="movienames" key={movie.slug}>
                    <Link to={`/movies/${movie.slug}`}>
                    <img 
                            src={movie.poster} 
                            alt={movie.name} 
                            className="movie-poster"
                            
                      
                        />
                        <p>{movie.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Movies;