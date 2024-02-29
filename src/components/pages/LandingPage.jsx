import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      {" "}
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
