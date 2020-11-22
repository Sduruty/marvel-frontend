import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NoMatch from "./containers/NoMatch";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import Page from "./containers/Page";
import Favs from "./containers/Favs";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import "./css/Loader.css";

const App = () => {
  const [favArr, setFavArr] = useState([]);
  document.body.style.overflow = "visible";

  const apiUrl = "https://marvel-backend-sd.herokuapp.com";
  // const apiUrl = "http://localhost:300O";

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/signup">
            <Signup>BONUS</Signup>
          </Route> */}
          <Route path="/character/:id">
            <Page favArr={favArr} setFavArr={setFavArr} apiUrl={apiUrl}></Page>
          </Route>
          <Route path="/characters">
            <Characters
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Characters>
          </Route>
          <Route path="/comic/:id">
            <Page favArr={favArr} setFavArr={setFavArr} apiUrl={apiUrl}></Page>
          </Route>
          <Route path="/comics">
            <Comics
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Comics>
          </Route>
          <Route path="/favs">
            <Favs favArr={favArr} setFavArr={setFavArr} apiUrl={apiUrl}></Favs>
          </Route>
          <Route exact path="/">
            <Characters
              favArr={favArr}
              setFavArr={setFavArr}
              apiUrl={apiUrl}
            ></Characters>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer></Footer>
        <div></div>
      </Router>
    </div>
  );
};

export default App;
