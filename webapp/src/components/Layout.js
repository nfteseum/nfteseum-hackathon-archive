import "../css/Layout.css";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import logoCircle from "../assets/logo circle.png";
import Login from "./Login";

function LoggedIn(props) {
  return (
    <Link to="/user/me" className="nav-profile-icon">
      <img alt="user" src={this.props.favicon} />
    </Link>
  );
}

function NavProfile(props) {
  return <Login />;
}

export default class Layout extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="navbar">
          <div className="nav-content">
            <div className="nav-branding">
              <img alt="app" src={logoCircle} />
              <Link className="nav-branding-name" to="/">
                Nftseum
              </Link>
            </div>
            <div className="nav-searchbar">
              <input className="nav-bar" placeholder="Search"></input>
            </div>
            <div className="nav-profile">
              <NavProfile isLoggedIn={window.ethereum.isConnected()} />
            </div>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
}
