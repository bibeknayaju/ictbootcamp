import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__content">
        <h1>
          Title of a longer <br /> featured blog post
        </h1>
        <h4>
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </h4>
      </div>
      <h5>Continue reading...</h5>
    </div>
  );
}

export default Main;
