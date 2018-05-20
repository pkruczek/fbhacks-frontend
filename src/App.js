import React, { Component } from "react";
import { Users, Compass, User } from "react-feather";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileView from "./views/ProfileView";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import GroupsView from "./views/GroupsView";
import Discover from "./views/Discover";
import ChatView from "./views/ChatView";
import Login from "./views/Login";

class App extends Component {
  render() {
    const isLogged = sessionStorage.getItem("token") !== null;

    if (!isLogged) {
      return <Login />;
    }
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar>
              <nav>
                <NavLink exact to="/">
                  <Users size={18} />Groups
                </NavLink>
                <NavLink to="/discover">
                  <Compass size={18} />
                  Discover
                </NavLink>
                <NavLink to="/profile">
                  <User size={18} />
                  Profile
                </NavLink>
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
