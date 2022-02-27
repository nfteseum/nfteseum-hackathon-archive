import "../css/EditProfile.css";
import React from "react";
import { toast } from 'react-toastify';

export default class Layout extends React.Component {
  constructor(props) {
      super(props);
      this.state =  {profileData: {pfp: "", nick: "", bio: ""}};
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
    this.onInputChange = this.onInputChange.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    toast("Coming Soon!");
    return false;
  }

  onInputChange(e) {
      this.setState({
          profileData: {
              ...this.state.profileData,
              [e.target.name]: e.target.value
          }
      })
  }

  render() {
    return (
        <form className="edit-profile-page" onSubmit={this.formSubmit}>
            <div className="ep-category">
                <label className="ep-label">Profile Picture link</label>
                <input className="ep-input" name="pfp" value={this.state.profileData.pfp} onChange={this.onInputChange}></input>
            </div>
            <div className="ep-category">
                <label className="ep-label">Nickname</label>
                <input className="ep-input" name="nick" value={this.state.profileData.nick} onChange={this.onInputChange}></input>
            </div>
            <div className="ep-category">
                <label className="ep-label">Bio</label>
                <textarea className="ep-textarea" name="bio"  value={this.state.profileData.bio} onChange={this.onInputChange}></textarea>
            </div>
            <div className="ep-category">
                <input className="ep-submit" type="submit" value="Save"></input>
            </div>
        </form>
    );
  }
}