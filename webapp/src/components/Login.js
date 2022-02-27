import React from "react";
import "../css/Login.css";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

function NavText(props) {
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
  return <button className="login-btn" onClick={props.loginMetamask}>Login with metamask</button>;
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn || false,
      loginMetamask: this.loginMetamask,
    };
  }

  loginMetamask = async () => {
    if (typeof window.ethereum == "undefined") {
      toast.error("Metamask not found");
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
    ).then((res) => res.json()).catch((e) => toast.error(e.toString()));
    if (!res || res.status !== "ok") {
      return toast.error(res.error);
    }
    const nonce = res.data.nonce;

    let message = `${nonce}`;
    let rawSig = signer.signMessage(message);

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
      }).then((res2) => res2.json()).catch((e) => toast.error(e.toString()))
    );
    if (res2.status !== "ok") {
      return toast.error("error\n\n" + res2.error);
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
