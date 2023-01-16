import React from "react";
import "./ContentLeft.css";

function ContentLeft() {
  return (
    <>
      <div className="content">
        <div className="ContentLeft">
          <div className="ContentLeft__text">
            <h4>WORLD</h4>
            <h1>Featured Post</h1>
            <p className="ContentLeft__date">Nov 12</p>
            <p>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <h6>Continue reading</h6>
          </div>
        </div>

        <div className="ContentLeft__thumbnail">
          <h4>Thumnail</h4>
        </div>
      </div>
    </>
  );
}

export default ContentLeft;
