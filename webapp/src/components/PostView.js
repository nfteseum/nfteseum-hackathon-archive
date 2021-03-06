import React from "react";
import "../css/PostView.css";
import like from "../assets/heart.svg";
import liked from "../assets/heart_filled.svg";
import { toast } from 'react-toastify';

export default class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.likePost = this.likePost.bind(this);
    this.state = { postComments: [], liked: this.props.liked || false };
  }

  likePost() {
    this.setState({ liked: !this.state.liked }); // todo: update in db
  }

  componentDidMount() {
    // todo: get props (nft, name, favicon) from url containing post id and addr
    // get comments and set state
    this.setState({
      postComments: [
        {
          name: "noobmaster69",
          favicon: "https://github.com/soulninja-dev.png",
          comment: "hehe",
        },
        {
          name: "noobmaster420",
          favicon: "https://github.com/Shiv-Patil.png",
          comment: "wow",
        },
        {
          name: "I touch grass",
          favicon:
            "https://cdn.discordapp.com/attachments/875196892592627722/947263297881800758/11850309_1674349799447611_206178162_a.png",
          comment: ":)",
        },
      ],
    });
  }

  submitComment(e) {
    e.preventDefault();
    toast("Your comment is posted, just invisible :p");
    return false;
  }

  render() {
    return (
      <div className="post-view">
        <div className="nft-view">
          <img alt="nft" src={this.props.nft} />
        </div>
        <div className="pv-post-data">
          <div className="pv-header">
            <div className="pv-owner-favicon">
              <img alt="pv-favicon" src={this.props.favicon} />
            </div>
            <div className="pv-owner-name">{this.props.name}</div>
          </div>
          <div className="pv-separator" />
          <div className="comments-area">
            <div className="comments">
              <Comment
                favicon={this.props.favicon}
                comment={this.props.description}
                name={this.props.name}
              />
              {this.state.postComments ? (
                this.state.postComments.map((comment, index) => {
                  return (
                    <Comment
                      key={index}
                      name={comment.name}
                      favicon={comment.favicon}
                      comment={comment.comment}
                    />
                  );
                })
              ) : (
                <div />
              )}
            </div>
          </div>
          <div className="pv-separator" />
          <div className="pv-actions-container">
            <img
              onClick={this.likePost}
              alt="like"
              src={this.state.liked ? liked : like}
            />
          </div>
          <div className="pv-separator" />
          <form className="add-comment-form" onSubmit={this.submitComment}>
            <input
              className="add-comment"
              placeholder="Add a comment..."
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-area">
        <div className="comment-favicon">
          <img alt="favicon" src={this.props.favicon} />
        </div>
        <div className="comment-text">
          <span>{this.props.name + ": "}</span>
          {this.props.comment}
        </div>
      </div>
    );
  }
}
