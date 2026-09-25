import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <a href="/" className="logo">
        RH<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#work">WORK</a>
        <a href="#skills">SKILLS</a>
      </div>

      <Magnetic strength={0.2}>
        <a href="#contact" className="talk">
          LET'S TALK ↗
        </a>
      </Magnetic>
    </motion.nav>
  );
}

export default Navbar;