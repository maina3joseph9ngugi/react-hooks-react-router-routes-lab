import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}</div>;
  let movieCard = movies.map(movie => (
    <div key={movie.title}>
      Name: {movie.title}<br/>
      Time: {movie.time}
      <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movieCard}
    </div>);
}

export default Movies;