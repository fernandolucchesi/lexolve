import Link from "next/link";
import React, { useEffect, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import Modal from "./Modal";

export default function Nav() {
  const lexolveLogo = require("../public/logo.png");

  const [session, setSession] = useLocalStorage("loggedIn", false);

  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setSession(
      window.localStorage.getItem("loggedIn") == "true" ? true : false
    );
  }, []);

  useEffect(() => {
    if (session) {
      setShowModal(true);
    }
  }, [session]);

  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 ">
      <nav className="container justify-between m-auto flex items-center h-16 px-4 sm:px-0">
        <Link href="/">
          <a href="home">
            <img src={lexolveLogo} width="140" alt="Lexolve logo" />
          </a>
        </Link>
        <ul className="flex flex-row items-center">
          <li>
            {session ? (
              <button className="btn" onClick={() => setSession(false)}>
                Log out
              </button>
            ) : (
              <button className="btn primary" onClick={() => setSession(true)}>
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
      {showModal && (
        <Modal
          headline="You are now logged in!"
          onClose={() => setShowModal(false)}
        />
      )}
    </header>
  );
}
