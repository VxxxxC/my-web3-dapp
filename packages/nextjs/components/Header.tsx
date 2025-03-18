"use client";

import React from "react";
import { HeaderHamburgerMenu } from "./HeaderHamburger";
import { ConnectButton } from "~~/components/scaffold-alchemy";

/**
 * Site header
 */

export const Header = () => {
  return (
    <div className="sticky lg:static top-0 navbar bg-transparent min-h-0 flex-shrink-0 justify-between z-20 px-0 sm:px-2 py-1">
      <div className="navbar-start w-auto lg:w-1/2">
        <HeaderHamburgerMenu />
      </div>
      <div className="navbar-end flex-grow mr-4">
        <ConnectButton />
      </div>
    </div>
  );
};
