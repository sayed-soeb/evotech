import React from "react";
import "./Sunheader.css";
import ic from "./assets/File Plus icon.svg";

const Sunheader = () => {
  return (
    <div className="sunheader">
      <div className="overlap">
        <div className="left">
          <div className="text-wrapper">Dashboard</div>
          <div className="add-new-button">
            <div className="overlap-group">
              <div className="div">Add New</div>
            </div>
          </div>
          <img className="line" alt="Line" src="line-2.svg" />
        </div>
        <div className="right">
          <div className="today">
            <div className="overlap-2">
              <div className="text-wrapper-2">Today</div>
              <div className="today-active">
                <div className="today-active-wrapper">
                  <div className="today-active-2">Today</div>
                </div>
              </div>
            </div>
          </div>
          <div className="month">
            <div className="text-wrapper-3">Month</div>
          </div>
          <div className="year">
            <div className="text-wrapper-4">Year</div>
          </div>
          <div className="actions-button">
            <div className="div-wrapper">
              <div className="text-wrapper-5">Actions</div>
            </div>
          </div>
          <img className="file-plus-icon" alt="File plus icon" src={ic} />
        </div>
      </div>
    </div>
  );
};

export default Sunheader;
