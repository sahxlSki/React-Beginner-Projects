import { useParams } from "react-router-dom";
import { movies } from "../../MovieData/data";
import "./MoviesDetail.css";

function MoviesDetail() {
  const { slug } = useParams();
  const movie = movies.find((m) => m.slug === slug);

  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.name} />
      <h2>{movie.name}</h2>
      <h3>Cast: {movie.cast}</h3>
      <h3>Director: {movie.director}</h3>
      <h3>Release Date: {movie.releaseDate}</h3>
    </div>
  );
}

export default MoviesDetail;
