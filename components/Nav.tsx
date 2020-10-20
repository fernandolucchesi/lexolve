import Link from "next/link";
import React, { useEffect, useState } from "react";

import Modal from "./Modal";

export default function Nav() {
  const lexolveLogo = require("../public/logo.png");

  const [session, setSession] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
              <>
                <Link href="/">
                  <button className="btn" onClick={() => setSession(!session)}>
                    Log out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  className="btn primary "
                  onClick={() => setSession(!session)}
                >
                  Log In
                </button>
              </>
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
