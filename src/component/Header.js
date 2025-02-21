import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <div className="header">
      <button className="icon-button">
        <img src="/images/back-button.png" alt="뒤로" />
      </button>
      <span>{title}</span>
      <button className="icon-button">
        <img src="/images/home-button.png" alt="홈" />
      </button>
    </div>
  );
}

export default Header;
