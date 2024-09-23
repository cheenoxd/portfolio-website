import React from 'react';
import { motion } from 'framer-motion';
import '../css/Sidebar.css';

export default function ToggleButton({ setOpen }) {
  return (
    <button className="toggle-button" onClick={() => setOpen((prev) => !prev)}>
      {/* SVG for the hamburger menu */}
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Top bar */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },  // When the menu is closed
            open: { d: "M 3 16.5 L 17 2.5" }    // When the menu is open
          }}
        />

        {/* Middle bar */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },  // Visible when closed
            open: { opacity: 0 }     // Hidden when open
          }}
        />

        {/* Bottom bar */}
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },  // When the menu is closed
            open: { d: "M 3 2.5 L 17 16.346" }        // When the menu is open
          }}
        />
      </svg>
    </button>
  );
}
