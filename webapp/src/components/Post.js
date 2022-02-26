import React from "react";
import "../css/Post.css";

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
            src="https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png"
          />
        </div>
        <div className="footer">
          <div className="actions-container">
            <img alt="like" src={process.env.PUBLIC_URL + "/heart.svg"} />
            <img alt="comment" src={process.env.PUBLIC_URL + "/chat.svg"} />
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
