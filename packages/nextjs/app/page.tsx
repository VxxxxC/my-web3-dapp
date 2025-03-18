"use client";

import { useAuthModal } from "@account-kit/react";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-alchemy";
import { useClient } from "~~/hooks/scaffold-alchemy/useClient";

const Home: NextPage = () => {
  const { address } = useClient();
  const { openAuthModal } = useAuthModal();
  const isConnected = !!address;

  return (
    <>
      <div className="flex justify-center items-center flex-col flex-grow">
        <div className="px-5">
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            {isConnected ? (
              <>
                <p className="my-2 font-medium">Connected Address:</p>
                <Address address={address} />

                <span className="text-teal-500 text-4xl font-bold text-center">You are Logged In !!!!</span>
              </>
            ) : (
              <button className="btn btn-primary my-4" onClick={openAuthModal}>
                Login and do stuff onchain!
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
