import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}</div>;
  let directorsCards = directors.map(director => (
    <div key={director.name}>
      Name: {director.name}
      Movies:
      <ul>
        {director.movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
    </div>
  ))
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorsCards}
    </div>);
}

export default Directors;
