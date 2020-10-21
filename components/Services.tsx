import React from "react";

import Giphy from "./Giphy";

function Services() {
  return (
    <div className="bg-orange-200">
      <section className="section container">
        <div>
          <h1 className="w-full text-xl font-raleway lg:text-3xl pr-8 text-center center">
            Lexolve offers an intelligent and affordable platform to address the
            legal needs that arise in your business
          </h1>
          <h2 className="w-full text-l lg:text-xl mt-8 text-center center">
            Fernando offers gifs and bad jokes
          </h2>
        </div>
        <Giphy />
      </section>
    </div>
  );
}

export default Services;
