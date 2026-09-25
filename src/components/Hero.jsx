import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import HeroScene from "./HeroScene";

function Hero() {
  return (
    <section className="hero">

      {/* 3D HERO SCENE */}
      <div className="hero-scene">
        <HeroScene />
      </div>

      {/* TOP INFO */}
      <div className="hero-top">
        
        <span>BENGALURU · INDIA</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="hero-content">

        <div className="hero-text">

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            INFORMATION SCIENCE ENGINEERING STUDENT
            <br />
            CREATIVE DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            REVANTH
            <br />
            <span>HM</span>
          </motion.h1>

          <motion.p
            className="description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            I design and build digital experiences
            <br />
            where technology meets creativity.
          </motion.p>

        </div>

      </div>

     
    
    </section>
  );
}

export default Hero;