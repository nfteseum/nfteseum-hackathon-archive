import React from "react";
import "../css/Login.css";
import { ethers } from "ethers";
import { Link } from "react-router-dom";

function NavText(props) {
  console.log(props);
  if (props.state.isLoggedIn) {
    return <LoggedInText favicon="https://github.com/soulninja-dev.png" />;
  } else {
    return <NotLoggedIn loginMetamask={props.loginMetamask} />;
  }
}

function LoggedInText(props) {
  return (
    <Link to="/user/me" className="nav-profile-icon">
      <img alt="user" src={props.favicon} />
    </Link>
  );
}

function NotLoggedIn(props) {
  return <button onClick={props.loginMetamask}>Login with metamask</button>;
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn,
      loginMetamask: this.loginMetamask,
    };
  }

  loginMetamask = async () => {
    if (typeof window.ethereum == "undefined") {
      alert("Please install metamask");
      return;
    }

    window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const address = await signer.getAddress();
    console.log(address);

    const res = await fetch(
      `http://localhost:1717/api/user/${address}/nonce`
    ).then((res) => res.json());
    const nonce = res.data.nonce;

    let message = `${nonce}`;
    let rawSig = signer.signMessage(message);
    rawSig.then((sig) => console.log(sig));

    const res2 = await rawSig.then((sig) =>
      fetch(`http://localhost:1717/api/user/${address}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          signature: sig,
          username: "Soul",
          bio: "need sleep",
        }),
      }).then((res2) => res2.json())
    );
    if (res2.status != "ok") {
      console.log("ERROR GO BRR");
    }

    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    return (
      <NavText
        loginMetamask={this.loginMetamask}
        state={{ isLoggedIn: this.state.isLoggedIn }}
      />
    );
  }
}
