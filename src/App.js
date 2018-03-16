import React, { Component } from "react";
import "./App.css";
import routes from "./routes";

class App extends Component {
  render() {
    // console.log(this);
    return (
      <div className="App">
        {routes}
       
      </div>
    );
  }
}

export default App;
