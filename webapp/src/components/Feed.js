import React from "react";
import Post from "./Post";
import "../css/Feed.css";
import nft1 from "../assets/nft1.jpeg";
import nft2 from "../assets/nft2.jpeg";
import nft3 from "../assets/nft3.jpeg";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feedPosts: [] };
  }

  componentDidMount() {
    // call /api/feed and set feedPosts to it
    // add pagination buttons to switch pages and update feedPosts prop after getting data from api

    this.setState({
      feedPosts: [
        {
          name: "user 1",
          address: "0xuser",
          favicon: "https://github.com/soulninja-dev.png",
          nft: nft1,
          description: "Cool NFT",
          likes: 69,
          liked: true,
        },
        {
          name: "user too",
          address: "0xuser",
          favicon: "https://github.com/Shiv-Patil.png",
          nft: nft2,
          description: "Thanks for the likes",
          likes: 420,
        },
        {
          name: "user three",
          address: "0xuser",
          favicon: "https://github.com/devnull03.png",
          nft: nft3,
          description: "what are nfts",

          likes: 1,
        },
        {
          name: "noobmaster69",
          address: "0xuser",
          favicon: "https://github.com/soulninja-dev.png",
          nft: "https://cdn.discordapp.com/attachments/940221080747003978/947042747225866290/bb88c99f4683a5fcf4c367ed8d0c0f64.png",
          description: "what are you doing",
          likes: 2,
        },
      ],
    });
  }

  render() {
    return (
      <div className="mainfeed">
        {this.state.feedPosts ? (
          this.state.feedPosts.map((post, index) => {
            // switch id=index to post id
            return (
              <Post
                key={index}
                id={index}
                address={post.address}
                name={post.name}
                favicon={post.favicon}
                nft={post.nft}
                description={post.description}
                likes={post.likes}
                liked={post.liked}
              />
            );
          })
        ) : (
          <p>No posts</p>
        )}
      </div>
    );
  }
}
