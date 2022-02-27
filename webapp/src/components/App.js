import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import PostView from "./PostView";
import Login from "./Login";
import Feed from "./Feed";
import Layout from "./Layout";
import "../css/App.css";

export default class App extends React.Component {
  /*

  path: /
  - Need to call /api/user/me get pfp url and set props.favicon to it

  path: /user/:address
  - Need to call /api/user/:address get info and set props

  path: /post/:address/:id
  - Need to call /api/post/:id get info and set props
  - populate with author data in backend to get pfp url

  */
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout favicon="https://Github.com/SoulNinja-dev.png" />
              }
            >
              <Route index element={<Feed />} />
              <Route
                path="user/:address"
                element={
                  <Profile
                    postCount="5"
                    followers="12"
                    following="13"
                    name="NoobMaster69"
                    favicon="https://github.com/soulninja-dev.png"
                  />
                }
              />
              <Route
                path="post/:address/:id"
                element={
                  <PostView
                    nft="https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png"
                    description="go touch grass lol"
                    name="I touch grass"
                    favicon="https://cdn.discordapp.com/attachments/875196892592627722/947263297881800758/11850309_1674349799447611_206178162_a.png"
                  />
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
