import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileView from "./views/ProfileView";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import GroupsView from "./views/GroupsView";
import Discover from "./views/Discover";
import ChatView from "./views/ChatView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar>
              <nav>
                <NavLink exact to="/">
                  Groups
                </NavLink>
                <NavLink to="/discover">Discover</NavLink>
                <NavLink to="/profile">Profile</NavLink>
              </nav>
            </NavBar>
            <Route exact path="/" component={GroupsView} />
            <Route path="/profile" component={ProfileView} />
            <Route path="/discover" component={Discover} />
            <Route path="/group/:groupId" component={ChatView} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
