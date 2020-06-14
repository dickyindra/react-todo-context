import React from "react";

import "./style.css";

const Header = ({ title, date }) => {
  return (
    <div className="header">
      <div className="header-gradient">
        <div className="header-container">
          <div className="header-title">{title}</div>
          <div className="header-date">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
