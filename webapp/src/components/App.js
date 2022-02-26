import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Login from "./Login";
import Post from "./Post";
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
              path="/post"
              element={
                <Post
                  name="user"
                  favicon="https://github.com/Shiv-Patil.png"
                  description="ok and?"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
