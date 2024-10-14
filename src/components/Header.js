import React from "react";
import ColorSchemeSwitcher from "./ColorSchemeSwitcher";

const Header = (props) => {
  return (
    <header className="container" {...props}>
      <nav>
        <ul>
          <li><strong>Home Climate Manager</strong></li>
        </ul>
        <ul>
          <li><ColorSchemeSwitcher className="contrast" /></li>
          <li><a href="http://acmaster">Master</a></li>
          <li><a href="http://acalex">Alex</a></li>
          <li><a href="http://acguest">Guest</a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
