import React from "react";
import "./TopNavBar.css";

function TopNavBar() {
  return (
    <>
      <div className="TopNavBar">
        <div className="TopNavBar__left">
          <h4>Susbscibe</h4>
        </div>

        <div className="TopNavBar__middle">
          <h1>Large</h1>
        </div>

        <div className="TopNavBar__right">
          <h2>🔍</h2>
          <button>Sign up</button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default TopNavBar;
