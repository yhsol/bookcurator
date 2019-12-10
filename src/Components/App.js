import React, { Component } from "react";
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";
import Board from "../UI/Board";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router />
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
