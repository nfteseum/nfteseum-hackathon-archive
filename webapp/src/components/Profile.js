import "../css/Profile.css";
import { Link } from "react-router-dom";
import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedPosts: [] };
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    // call /user/me to get posts and update feedPosts

    this.setState({
      feedPosts: [
        {
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
        },
        {
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
        },
        {
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
        },
        {
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
        },
      ],
    });
  }

  logOut() {

  }

  render() {
    return (
      <div className="profile-page">
        <div className="user-info-container">
          <div className="user-avatar">
            <img alt="user" src={this.props.favicon} />
          </div>
          <div className="user-info">
            <p className="user-name">{this.props.name}</p>
            <div className="user-data">
              <s>
                <s>{this.props.postCount}</s>{" "}
                {this.props.postCount > 1 ? " posts" : " post"}
              </s>
              <s>
                <s>{this.props.followers}</s> {" followers"}
              </s>
              <s>
                <s>{this.props.following}</s> {" following"}
              </s>
            </div>
            <p className="user-bio">This is some bio<br /> oka</p>
            <UserProfileButtons logOut={this.logOut} />
          </div>
          <div className="spacer" />
        </div>
        <div className="separator"></div>
        <div className="posts">
          {this.state.feedPosts ? (
            this.state.feedPosts.map((post, index) => {
              return <Link key={index} className="profile-post" to={"/post/someuser/" + index}><img alt="post" src={post.nft} /></Link>; // switch index to post id, someuese to address
            })
          ) : (
            <p>No posts</p>
          )}
        </div>
      </div>
    );
  }
}

function UserProfileButtons(props) {
  if (true) { // condition whether profile is of user logged in
    return (
      <div className="action-buttons">
        <Link className="btn-container" to="/editprofile"><button> Edit profile </button></Link>
        <div className="btn-container"><button onClick={props.logOut}> Logout </button></div>
      </div>
    );
  }
  if (true) { // condition whether user follows profile
    return (
      <div className="action-buttons">
        <div className="btn-container"><button> Unfollow </button></div>
      </div>
    )
  }
  return (
    <div className="action-buttons">
      <div className="btn-container"><button> Follow </button></div>
    </div>
  );
}
