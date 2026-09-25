import { useState } from "react";

import "./App.css";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";
import Cursor from "./components/Cursor";
import LoadingScreen from "./components/LoadingScreen";

import About from "./About";
import Work from "./Work";
import NCC from "./NCC";
import Education from "./Education";
import Creative from "./Creative";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* =========================
          CINEMATIC LOADING SCREEN
      ========================== */}

      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}


      {/* =========================
          GLOBAL EFFECTS
      ========================== */}

      <Cursor />

      <SmoothScroll />


      {/* =========================
          NAVIGATION
      ========================== */}

      <Navbar />


      {/* =========================
          HERO
      ========================== */}

      <Hero />

<About />

<Work />

<NCC />

<Education />

<Experience />

<Skills />

<Creative />

<Contact />
    </>
  );
}

export default App;