import "../css/Layout.css";
import { Outlet, Link } from "react-router-dom";
import React from "react";
import logoCircle from "../assets/logo circle.png";
import Login from "./Login";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure({
  draggable: false,
  theme: "dark",
  position: "bottom-right"
});

function NavProfile(props) {
  return <Login />;
}

function isEthereumConn() {
  try {
    return window.ethereum.isConnected();
  } catch {
    return false;
  }
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  searchSubmit(e) {
    e.preventDefault();
    toast.success("Enjoy this song :)");
    setTimeout(() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), 2000);
    return false;
  }

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
              <form className="nav-bar-form" onSubmit={this.searchSubmit}><input className="nav-bar" placeholder="Search"></input></form>
            </div>
            <div className="nav-profile">
              <NavProfile isLoggedIn={isEthereumConn()} />
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
