import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    let frame;

    const update = (time) => {
      const elapsed = time - start;
      const value = Math.min(
        Math.floor((elapsed / duration) * 100),
        100
      );

      setProgress(value);

      if (value < 100) {
        frame = requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setDone(true);

          setTimeout(() => {
            onComplete?.();
          }, 700);
        }, 200);
      }
    };

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <div className="loading-top">
            <span>REVANTH HM</span>
            <span>PORTFOLIO / 2026</span>
          </div>

          <div className="loading-center">
            <motion.div
              className="loading-name"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              REVANTH
              <span>HM</span>
            </motion.div>

            <div className="loading-progress">
              <div className="loading-number">
                {String(progress).padStart(3, "0")}
                <span>%</span>
              </div>

              <div className="loading-bar">
                <motion.div
                  className="loading-bar-fill"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </div>

          <div className="loading-bottom">
            <span>DEVELOPER</span>
            <span>CADET</span>
            <span>CREATOR</span>

            <span className="loading-status">
              {progress < 100 ? "INITIALIZING" : "ENTERING"}
            </span>
          </div>

          <div className="loading-red-light" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}