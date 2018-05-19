import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileView from "./views/ProfileView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GroupsView from "./views/GroupsView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar>
              App Name here
              <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
              </nav>
            </NavBar>
            <Route exact path="/" component={GroupsView} />
            <Route path="/profile" component={ProfileView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
