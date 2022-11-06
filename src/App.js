import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import SVG from "./components/svg";
import Footer from "./components/footer";
import Pricing from "./components/pricing";

class App extends Component {
  render() {
    return (
      <div>
        <SVG />
        <Navbar title="Movies" />

        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </div>
    );
  }
}

export default App;
