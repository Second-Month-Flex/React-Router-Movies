import React, { useState } from "react";

import SavedList from "./Movies/SavedList";
import { Route, Switch, Link } from "react-router-dom";
// import axios from "axios";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        {/* the switch makes it so that only first route encountered inside renders */}
        <Route path="/movies/:id">
          <Movie />
        </Route>

        {/* put the least specific path at the end of the switch */}
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>{" "}
    </div>
  );
};

export default App;
