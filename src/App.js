import React from 'react';
import Browse from './components/Browse';
import axios from "axios";
import Splash from './components/splash'
import Login from './components/auth/login'
import SignUp from './components/auth/signUp'
// import NavBar from './components/navBar'
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: {},
  };
  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user,
    });
  };
  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {},
    });
  };

  loginStatus = () => {
    axios
      .get("http://localhost:3001/api/v1/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  componentDidMount() {
    // debugger
    this.loginStatus();
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <Browse/> */}
        <Switch>
          <Route path="/splash" render={(props) => <Splash {...props} loggedInStatus={this.state.isLoggedIn}/>} />
          <Route path="/login" render={(props) => <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />} />
          <Route path="/signUp" render={(props) => <SignUp {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>} />
          <Route path="/browse" render={() => <Browse />} />
        </Switch>
      </div>
    );
  }
}

export default App;
