import React from "react";

import Confetti from "./Confetti";

function Footer() {
  return (
    <>
      <div className="bg-gray-900 h-64"></div>
      <footer className="p-8 bg-green-700 text-white text-">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-auto lg:mr-auto text-center lg:text-left">
            <a href="mailto:feelucchesi@gmail.com">
              <span
                className="font-bold hover:text-orange-500"
                onClick={() => Confetti()}
              >
                Hire me
              </span>{" "}
            </a>
            @ Lexolve
          </div>
          <div className="flex justify-center items-center mt-4 lg:mt-0" />
          <a
            href="https://www.linkedin.com/in/fernando-lucchesi"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
