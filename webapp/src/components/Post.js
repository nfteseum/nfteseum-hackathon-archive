import React from "react";
import "../css/Post.css";
import like from "../assets/heart.svg";
import comment from "../assets/chat.svg";

export default class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <div className="header">
          <div className="owner-favicon">
            <img alt="favicon" src={this.props.favicon} />
          </div>
          <div className="owner-name">{this.props.name}</div>
        </div>
        <div className="body">
          <img
            alt="nft"
            src={this.props.nft}
          />
        </div>
        <div className="footer">
          <div className="actions-container">
            <img alt="like" src={like} />
            <img alt="comment" src={comment} />
          </div>
          <div className="likes">
          {this.props.likes} {this.props.likes > 1 ? " likes" : " like"}
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
