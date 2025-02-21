import React, { useState } from 'react';
import './SlideSidebar.css';
import { motion } from 'framer-motion';

const Sidebar = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="box"
    >
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>Sidebar</h2>
      <p>Animated sidebar using CSSTransition</p>
    </motion.div>
  );
};

const SidebarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Sidebar</button>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.4 }}
        className="sidebar"
      >
        
      </motion.div>
    </div>
  );
};

export default SidebarContainer;
