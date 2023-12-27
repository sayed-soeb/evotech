import React from "react";
import "./Header.css";
import search from './assets/Search.svg';
import compilling from './assets/Compiling.svg';
import cart from './assets/Cartss.png';
import bl from './assets/Layout 4 blocks.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="overlap">
        <div className="sep" />
        <div className="right">
          <div className="icons">
            <div className="search">
              <div className="overlap-group">
                <img className="path" alt="Path" src={search} />
                <img className="img" alt="Path" src={search} />
              </div>
            </div>
            <div className="compiling">
              <div className="div">
                <img className="combined-shape" alt="Combined shape" src={compilling} />
                <img className="combined-shape-2" alt="Combined shape" src={compilling} />
              </div>
            </div>
            <div className="equalizer">
              <div className="rectangle-copy" />
              <div className="rectangle-copy-2" />
              <div className="rectangle-copy-3" />
              <div className="rectangle-copy-4" />
            </div>
            <img className="stockholm-icons" alt="Stockholm icons" src={cart} />
            <div className="layout-blocks">
              <div className="overlap-2">
                <div className="rectangle" />
                <img className="combined-shape-3" alt="Combined shape" src={bl} />
              </div>
            </div>
          </div>
          <div className="text-wrapper">Nick Thomas</div>
          <div className="initial-icon">
            <div className="div-wrapper">
              <div className="text-wrapper-2">N</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
