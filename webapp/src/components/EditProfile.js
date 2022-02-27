import "../css/EditProfile.css";
import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
      super(props);
      this.state =  {profileData: {}};
      this.formSubmit = this.formSubmit.bind(this);
  }

  componentDidMount() {
    // get current pfp, nick, bio to populate
    const data = {
        pfp: "https://cdn.discordapp.com/attachments/875196892592627722/947263297881800758/11850309_1674349799447611_206178162_a.png",
        nick: "I touch grass",
        bio: "Black Adam"
    }
    this.setState({profileData: data})
  }

  formSubmit() {

  }

  render() {
    return (
        <form className="edit-profile-page" onSubmit={this.formSubmit}>
            <div className="ep-category">
                <label className="ep-label">Profile Picture link</label>
                <input className="ep-input" name="pfp" value={this.state.profileData.pfp}></input>
            </div>
            <div className="ep-category">
                <label className="ep-label">Nickname</label>
                <input className="ep-input" name="nick" value={this.state.profileData.nick}></input>
            </div>
            <div className="ep-category">
                <label className="ep-label">Bio</label>
                <textarea className="ep-textarea" name="bio"  value={this.state.profileData.bio}></textarea>
            </div>
            <div className="ep-category">
                <input className="ep-submit" type="submit" value="Save"></input>
            </div>
        </form>
    );
  }
}