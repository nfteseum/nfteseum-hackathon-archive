import React from "react";
import "../css/Login.css";
/*
import { ethers } from "ethers";
import Web3Modal from "@web3modal/web3modal";
import WalletConnect from "@walletconnect/web3-provider";

let providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "c8b1d09b445b4c74322f289254147e55",
    },
  },
};

if (!window?.ethereum?.isSequence) {
  providerOptions = {
    ...providerOptions,
    sequence: {
      package: sequence,
      options: {
        appName: "nftseum",
        defaultNetwork: "polygon",
      },
    },
  };
}

const web3Modal = new Web3Modal({
  providerOptions,
  cacheProvider: true,
});
*/
export default class Login extends React.Component {
  /*componentDidMount() {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }

  async connectWeb3Modal() {
    if (web3Modal.cachedProvider) {
      web3Modal.clearCachedProvider();
    }
    connectWallet();
  }

  async connectWallet() {
    const wallet = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(wallet);

    if (wallet.sequence) {
      provider.sequence = wallet.sequence;
    }

    setProvider(provider);
  }

  async getAccounts() {
    const signer = provide?.getSigner();
    console.log("getAddress():", await signer.getAddress());

    console.log("accounts:", await provider?.listAccounts());
  }

  async signMessage() {
    const signer = await provider?.getSigner();
    const message = "Never gonna give you up";
    const sig = await signer.signMessage(message);
    console.log("signature:", sig);
  }
*/
  render() {
    return <div></div>;
  }
}
