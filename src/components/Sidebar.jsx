import React, { useState } from "react";
import "./Style/Sidebar.css";
import { FaBars, FaTimes, FaTachometerAlt, FaHistory, FaCalendarAlt, FaComments, FaUserMd, FaTools, FaChartPie, FaLifeRing, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="hamburger" onClick={toggleSidebar}>
          {isOpen ? <FaTimes className="icon-toggle" /> : <FaBars className="icon-toggle" />}
        </button>
        <span className="mobile-logo">
          <span className="logo1">Health</span>
          <span className="logo2">care.</span>
        </span>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="logo">
          <span className="logo1">Health</span>
          <span className="logo2">care.</span>
        </div>

        <div className="section-title">General</div>
        <div className="menu">
          <div className="menu-item active"><FaTachometerAlt className="icon" /> Dashboard</div>
          <div className="menu-item"><FaHistory className="icon" /> History</div>
          <div className="menu-item"><FaCalendarAlt className="icon" /> Calendar</div>
          <div className="menu-item"><FaUserMd className="icon" /> Appointments</div>
          <div className="menu-item"><FaChartPie className="icon" /> Statistics</div>
        </div>

        <div className="section-title">Tools</div>
        <div className="menu">
          <div className="menu-item"><FaComments className="icon" /> Chat</div>
          <div className="menu-item"><FaLifeRing className="icon" /> Support</div>
        </div>

        <div className="menu bottom">
          <div className="menu-item"><FaCog className="icon" /> Setting</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
