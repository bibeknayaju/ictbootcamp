import React from "react";
import About from "./About";
import "./FromTheFireHose.css";

function FromTheFireHose() {
  return (
    <div className="FromTheFireHose">
      <div className="FromTheFireHose__right">
        <h1>From the Firehose</h1>
        <hr />
        <h2 className="FromTheFireHose__SAMPLE">Sample blog post</h2>
        <p style={{ marginBottom: "20px", color: "gray" }}>
          January 1, 2021 by <span>Mark</span>
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This blog post shows a few different types of content that’s supported
          and styled with Bootstrap. Basic typography, lists, tables, images,
          code, and more are all supported as expected.
        </p>
        <hr />
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing so be on the lookout for this exact same
          string of text.
        </p>
        <h2>Blockquotes</h2>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
            marginTop: "10px",
          }}>
          This is an example blockquote in action:
        </p>{" "}
        <h5
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "20px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          Quoted text goes here.
        </h5>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
        <h2
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "20px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "800",
          }}>
          Example lists
        </h2>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This is some additional paragraph placeholder content. It's a slightly
          shorter version of the other highly repetitive body text used
          throughout. This is an example unordered list:
        </p>
        <ul
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            marginLeft: "40px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>
        </ul>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          And this is an ordered list:
        </p>
        <ol
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            marginLeft: "40px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          <li>First list item</li>
          <li>Second list item with a longer description</li>
          <li>Third list item to close it out</li>

          <p
            style={{
              color: "#212529",
              fontFamily:
                "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
              fontSize: "16px",
              marginBottom: "18px",
              lineHeight: "24px",
              fontWeight: "400",
            }}>
            And this is a definition list:
          </p>
        </ol>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "7px",
            marginTop: "9px",
            lineHeight: "24px",
            fontWeight: "800",
          }}>
          HyperText Markup Language (HTML)
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          The language used to describe and define the content of a Web page
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "7px",
            marginTop: "9px",

            lineHeight: "24px",
            fontWeight: "800",
          }}>
          Cascading Style Sheets (CSS)
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          Used to describe the appearance of Web content
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "7px",
            marginTop: "9px",

            lineHeight: "24px",
            fontWeight: "800",
          }}>
          JavaScript (JS)
        </p>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          The programming language used to build advanced Web sites and
          applications
        </p>
        <h1>Inline HTML elements</h1>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          HTML defines a long list of available inline tags, a complete list of
          which can be found on the Mozilla Developer Network.
        </p>
        <ul
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            marginLeft: "40px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          <li>To bold text, use.</li>
          <li>To italicize text, use.</li>
          <li>
            Abbreviations, like HTML should use , with an optional title
            attribute for the full phrase.
          </li>
          <li>Citations, like — Mark Otto, should use.</li>
          <li>Deleted text should use and inserted text should use .</li>
          <li>Superscript text uses and subscript text uses.</li>
        </ul>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          Most of these elements are styled by browsers with few modifications
          on our part.
        </p>
        <h2
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "700",
          }}>
          Heading
        </h2>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
        <h3
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "600",
          }}>
          Sub-heading
        </h3>
        <p
          style={{
            color: "#212529",
            fontFamily:
              "Segoe UI,Helvetica Neue,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontSize: "16px",
            marginBottom: "18px",
            lineHeight: "24px",
            fontWeight: "400",
          }}>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </div>

      <div className="FromTheFireHose__About">
        <About />
      </div>
    </div>
  );
}

export default FromTheFireHose;
