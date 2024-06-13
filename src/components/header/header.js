import React, { useState, useCallback } from "react";

import { useWallet } from "../../wallet/UseWallet.js";
import SearchBar from "./search-bar/searchBar.js";
import WalletSideBar from "./walletSideBar/WalletSideBar.js";
import WalletsCurrentNetwork from "./WalletsCurrentNetwork.js";
// import WalletSideBarDetails from "../side-pannels-drawers/WalletSideBarDetails.js";

import "../../index.css";
import "../../styles/fonsts.css";

// import ethLogo from "../../assets/eth-logo.png";

function Header() {
  const [isWalletSidebarOpen, setWalletSidebarOpen] = useState(false);

  const { wallet, networkId, correctNetwork } = useWallet();

  const handleOpenWalletSidebar = useCallback(() => {
    setWalletSidebarOpen(true);
  }, []);

  const handleCloseWalletSidebar = useCallback(() => {
    setWalletSidebarOpen(false);
  }, []);

  return (
    <div className="flex h-16 items-center text-white bg-gray-800 header z-50">
      {/* Logo */}
      <div className="ml-8 logo-main">
        <a
          //href=
          className="text-3xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          FairBet
        </a>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mr-4">
        <div className="flex justify-end">
          <SearchBar />
        </div>
      </div>

      {/* Connect Button */}

      {!wallet ? (
        <div>
          <button
            onClick={handleOpenWalletSidebar}
            className="justify-self-end bg-gray-700 hover:bg-indigo-900 py-1.5 px-12 mr-8 rounded-2xl lowercase"
          >
            Connect
          </button>
          <WalletSideBar
            isOpen={isWalletSidebarOpen}
            onClose={handleCloseWalletSidebar}
          />
        </div>
      ) : (
        <div className="flex justify-end">
          <WalletsCurrentNetwork />
          <button
            className="justify-self-end bg-gray-700 hover:bg-indigo-900 py-1.5 px-8 mr-8 rounded-2xl lowercase"
            onClick={handleOpenWalletSidebar}
          >
            {wallet.substring(0, 6)}...{wallet.substring(38, 42)}
          </button>
          <WalletSideBar
            isOpen={isWalletSidebarOpen}
            onClose={handleCloseWalletSidebar}
          />
        </div>
      )}
    </div>
  );
}

export default Header;