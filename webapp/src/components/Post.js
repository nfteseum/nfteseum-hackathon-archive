import React from "react";
import "../css/Post.css";
import like from "../assets/heart.svg";
import liked from "../assets/heart_filled.svg";
import comment from "../assets/chat.svg";
import { Link } from "react-router-dom";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
    this.state = { liked: this.props.liked || false, likes: this.props.likes };
  }
  likePost() {
    if (this.state.liked) {
      this.setState({likes: this.state.likes-1});
    } else {
      this.setState({likes: this.state.likes+1});
    }
    this.setState({ liked: !this.state.liked }); // todo: update in db
  }
  render() {
    return (
      <div className="post">
        <div className="header">
          <div className="owner-favicon">
            <img alt="favicon" src={this.props.favicon} />
          </div>
          <Link className="owner-name-link" to="/user/me"><div className="owner-name">{this.props.name}</div></Link>
        </div>
        <div className="body">
          <img alt="nft" src={this.props.nft} />
        </div>
        <div className="footer">
          <div className="actions-container">
            <div className="action-btn">
              <img
                onClick={this.likePost}
                alt="like"
                src={this.state.liked ? liked : like}
              />
            </div>
            <Link
              className="action-btn"
              to={"post/" + this.props.address + "/" + this.props.id}
            >
              <img alt="comment" src={comment} />
            </Link>
          </div>
          <div className="likes">
            {this.state.likes} {this.state.likes > 1 ? " likes" : " like"}
          </div>
          <div className="description">
            <span>{this.props.name + " "}</span>
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
