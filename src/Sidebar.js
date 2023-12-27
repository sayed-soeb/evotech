import React from "react";
import "./Sidebar.css";
import arrow from './assets/Arrow double left active.png';
import layers from './assets/Layers.svg';
import blocklayers from './assets/Layout 4 blocks.svg';
import path from './assets/Path 94.svg';
import arrows from './assets/Arrows.svg';
import iconfaded from './assets/Barcode read.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="overlap">
        <div className="background-rectangle" />
        <div className="highlighted" />
        <div className="top-part">
          <img className="arrow-double-left" alt="Arrow double left" src={arrow} />
        </div>
        <div className="icons-bright">
          <img className="layers" alt="Layers" src={layers} />
          <div className="layout-blocks">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="combined-shape" alt="Combined shape" src={blocklayers} />
            </div>
          </div>
        </div>
        <div className="headings">
          <div className="text-wrapper">CUSTOM</div>
        </div>
        <div className="subheadings">
          <div className="div">Users</div>
          <div className="text-wrapper-2">Contacts</div>
          <div className="text-wrapper-3">Chat</div>
          <div className="text-wrapper-4">Pages</div>
        </div>
        <div className="subheadings-active">
          <div className="text-wrapper-5">Dashboard</div>
          <div className="dashboard">DASHBOARD</div>
          <div className="text-wrapper-6">Applications</div>
        </div>
        <div className="strokes">
          <img className="line" alt="Line" src={path} />
          <img className="img" alt="Line" src="line-2-1.svg" />
          <img className="line-2" alt="Line" src="line-2-2.svg" />
        </div>
        <div className="icons-faded">
          <div className="box" />
          <div className="barcode-read">
            <div className="overlap-group">
              <div className="rectangle-2" />
              <img className="combined-shape" alt="Combined shape" src={iconfaded} />
            </div>
          </div>
        </div>
        <img className="arrows" alt="Arrows" src={arrows} />
      </div>
    </div>
  );
};

export default Sidebar;