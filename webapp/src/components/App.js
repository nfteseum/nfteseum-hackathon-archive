import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";
import "../css/App.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/profile/:address" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route // temp test
              path="/"
              element={<Feed />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
