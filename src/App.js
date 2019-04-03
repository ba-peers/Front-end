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
import GroupForm from "./components/GroupForm";
import MainpageForm from "./components/MainpageForm";
import 'bootstrap';

class App extends Component {
  state = {
    user: null,
    activePage: "home",
    membersList: []
  };

  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  changeActivePage = activePage => {
    console.log('changeActivePage g', activePage)
    this.setState({
      activePage: activePage
    });
  };

  changeToGroupForm = (members) => {
    this.setState({
      activePage: "group-form",
      membersList: members
    })
  }
  onSignin = () => {
    this.setState({ user: getUser() });
    // this.changeActivePage("profile");
    console.log("sigin in");
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
    console.log(user)
    return (
      <div>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout}
        />
            
        <div className="container">
          {activePage === "home" && user == null? <Home/> : ""}
          {activePage === "mainpageform"  && user !== null? <MainpageForm changeToGroupForm={this.changeToGroupForm} changeActivePage={this.changeActivePage}/> : ""}
          {activePage === "home"  && user !== null? <MainpageForm changeToGroupForm={this.changeToGroupForm} changeActivePage={this.changeActivePage}/> : ""}

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
          {activePage === "group-form" ? (
            <GroupForm members={this.state.membersList} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
