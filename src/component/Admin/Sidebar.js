import React from "react";
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="container bg-dark text-white">
      <ul>
        <li>Home</li>
        <li>Manage Places</li>
        <li>Add Places</li>
      </ul>
    </div>
  );
};

export default Sidebar;
