import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";
import Layout from "./Layout";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Layout favicon="https://Github.com/Shiv-Patil.png" />} >
            <Route index element={<Feed />} />
            <Route path="user/:address" element={<Profile postCount="5" followers="12" following="13" name="NoobMaster69" favicon="https://github.com/soulninja-dev.png" />} />
          </Route>
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
