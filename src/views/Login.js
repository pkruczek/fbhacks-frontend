import React from "react";
import Content from "../components/Content/Content";
import { login as apiLogin } from "../api/user";
import "./Login.css";

class Login extends React.Component {
  state = {
    login: "",
    password: ""
  };

  handleLogin = async e => {
    e.preventDefault();
    const { login, password } = this.state;
    const res = await apiLogin(login, password);
    const json = await res.json();
    if (json.id) {
      sessionStorage.setItem("token", json.id);
      sessionStorage.setItem("name", json.firstName + " " + json.lastName);
      window.location = "/";
    }
  };

  render() {
    const { login, password } = this.state;
    return (
      <Content>
        <form className="Login" onSubmit={this.handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="Input"
            value={login}
            onChange={e => this.setState({ login: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="Input"
            value={password}
            onChange={e =>
              this.setState({
                password: e.target.value
              })
            }
          />
          <button type="submit" className="Login-Button">
            Login
          </button>
        </form>
      </Content>
    );
  }
}

export default Login;
