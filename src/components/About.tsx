"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center max-w-3xl mx-auto">
          <motion.div
            className="w-full max-w-xs mx-auto"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            <img
              src="images/run.gif"
              alt="running-pixel-guy"
              loading="lazy"
              className="w-full max-w-[180px] mx-auto"
            />
          </motion.div>
          <motion.div
            className="ml-10"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <p className="text-2xl">
              My work focuses on building great user experiences. In my spare
              time, I enjoy building interactive media.
            </p>
            <br />
            <p className="text-2xl">
              If you'd like to reach out about opportunities or anything else,
              feel free to send a message - I'd be happy to chat.
            </p>
            <br />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
