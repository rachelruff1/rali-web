import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import AppHeader from "./components/Header/AppHeader/AppHeader";

class App extends Component {
  render() {
    console.log(this);
    return (
      <div className="App">
         {/* <AppHeader />  */}
        {routes}
       
      </div>
    );
  }
}

export default App;
