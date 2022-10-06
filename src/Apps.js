import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*/}</div>;
  return (
    <div>
      {/*{code here}*/}
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/directors">
          <Directors />
        </Route>
        <Route exact path="/actors">
          <Actors />
        </Route>
      </Switch>
    </div>);
}

export default App;
  18  
