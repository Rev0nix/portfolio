import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const target = event.target.closest(
        "a, button, input, textarea, [data-cursor]"
      );

      setHovering(Boolean(target));
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${hovering ? "cursor-hover" : ""}`}
      animate={{
        x: position.x,
        y: position.y,
        scale: hovering ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.2,
      }}
    >
      <span />
    </motion.div>
  );
}