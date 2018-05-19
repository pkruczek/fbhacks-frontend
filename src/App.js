import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileView from "./views/ProfileView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar>App Name here</NavBar>
        {/* TODO: react-router */}
        <ProfileView />
      </div>
    );
  }
}

export default App;
