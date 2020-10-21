import React from "react";

function Hero() {
  return (
    <section className="container section mt-16">
      <div className="w-full md:w-1/2 ">
        <h1 className="text-4xl md:text-5xl lg:pr-24 font-raleway font-black">
          Save money and time in your business!
        </h1>
        <p className="mt-4 text-lg leading-8 muted">
          Lexolve gives your business{" "}
          <span className="font-semibold">superpowers</span> to solve
        </p>
        <p className="leading-8 text-lg muted">
          legal needs easily and efficiently!
        </p>
        <button className="mt-8 btn primary">Start now</button>
      </div>
      <div className="w-full hidden md:block md:w-1/2 ">
        <img
          src={require("../public/hero.png")}
          width="400"
          alt="Lexolve logo"
        />
      </div>
    </section>
  );
}

export default Hero;
