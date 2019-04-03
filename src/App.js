import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import JoinGroup from "./components/JoinGroup";
import Home from "./components/Home";
import MyGroup from "./components/MyGroup";
import MainpageForm from "./components/MainpageForm";
import 'bootstrap';

class App extends Component {
  state = {
    user: null,
    activePage: "home",
  
  };

  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    this.setState({ 
      activePage: activePage
    });
  };

  onSignin = () => {
    this.setState({ user: getUser() });
    // this.changeActivePage("profile");
    this.changeActivePage("mainpageform");
  };
  
  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    this.changeActivePage("home");
    Signout();
  };
  
  render() {
    const { user, activePage } = this.state;
    return (
      <div>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
            
        <div className="container">
          {activePage === "home" && user == null? <Home/> : ""}
          {activePage === "home"  && user !== null? <MainpageForm setMembersList={this.setMembersList} changeActivePage={this.changeActivePage}/> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} />
          ) : (
            ""
          )}

          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} />
          ) : (
            ""
          )}

          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}

          {activePage === "group" ? (
            <JoinGroup changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
         

            {activePage === "my-group" ? (
            <MyGroup changeActivePage={this.changeActivePage} />
          ) : (
            ""
          )}
        
        </div>
      </div>
    );
  }
}

export default App;
