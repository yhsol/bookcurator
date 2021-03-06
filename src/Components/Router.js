import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home";
import Count from "../Routes/Count";
import Recent from "../Routes/Recent";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";
import FrontHeader from "../Routes/Front/FrontHeader";
import Board from "../UI/Board";

export default () => (
  <Router>
    <React.Fragment>
      <Header />
      {/* <Board> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Count} />
        <Route path="/recent" exact component={Recent} />
        <Route path="/search" exact component={Search} />
        <Route path="/detail/:id" exact component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
      {/* </Board> */}
    </React.Fragment>
  </Router>
);
