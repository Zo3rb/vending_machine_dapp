import Link from "next/link";
import { Fragment, useState, useEffect } from "react";
import Web3 from "web3";

export default function Home() {
  // States.
  const [connectError, setConnectError] = useState("");
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  // Connecting Wallet Handler
  const connectWalletHandler = async () => {
    const { ethereum }: any = window;

    if (typeof window !== "undefined" && typeof ethereum !== "undefined") {
      try {
        setAccount(await ethereum.request({ method: "eth_requestAccounts" }));
        setWeb3(new Web3(ethereum));
      } catch (error) {
        setConnectError(error.message);
      }
    } else {
      setConnectError("Please Install the Metamask");
    }
  };

  console.log(account, web3);

  // useEffect(() => {
  //   account === null && web3 === null && connectWalletHandler();
  // }, []);

  return (
    <Fragment>
      {/* Navbar Area. */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-white">
        <div className="container-fluid">
          <Link href="/">
            <a>
              Vending<span className="text-success">Machine</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <button
                className="btn btn-primary"
                onClick={connectWalletHandler}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar Area. */}

      <div>{connectError}</div>

      {/* Bootstrap JS File. */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
      {/* Bootstrap JS File. */}
    </Fragment>
  );
}
