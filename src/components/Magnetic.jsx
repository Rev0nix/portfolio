import { useRef } from "react";
import { motion } from "framer-motion";

export default function Magnetic({
  children,
  strength = 0.25,
  className = "",
}) {
  const ref = useRef(null);

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    element.style.transform = `translate(${x * strength}px, ${
      y * strength
    }px)`;
  };

  const reset = () => {
    const element = ref.current;
    if (!element) return;

    element.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  );
}