import React from "react";

import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";

export default function Page() {
  return (
    <div>
      <Nav />
      <Hero />
      <Clients />
      <Services />
      <Footer />
    </div>
  );
}
