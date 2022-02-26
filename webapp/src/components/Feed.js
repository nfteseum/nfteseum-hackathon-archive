import React from "react";
import Post from "./Post";
import "../css/Feed.css";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedPosts: [] };
  }

  componentDidMount() {
    // fetch("/feed")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ feedPosts: data }))
    //   .catch((err) => console.error(err));

    this.setState({
      feedPosts: [
        {
          name: "noobmaster69",
          favicon: "https://github.com/soulninja-dev.png",
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
          description: "haha grass",
          likes: 69
        },
        {
          name: "noobmaster69",
          favicon: "https://github.com/soulninja-dev.png",
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
          description: "haha more grass",
          likes: 420
        },
        {
          name: "noobmaster69",
          favicon: "https://github.com/soulninja-dev.png",
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
          description: "haha even more grass",
          likes: 1
        },
        {
          name: "noobmaster69",
          favicon: "https://github.com/soulninja-dev.png",
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
          description: "ok last one",
          likes: 2
        }
      ]
    });
  }

  render() {
    return (
      <div className="mainfeed">
        {this.state.feedPosts ? (
          this.state.feedPosts.map((post, index) => {
            return <Post name={post.name} favicon={post.favicon} nft={post.nft} description={post.description} likes={post.likes} />;
          })
        ) : (
          <p>No posts</p>
        )}
      </div>
    );
  }
}
