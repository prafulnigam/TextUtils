import React, { useState } from "react"; // useState is a hook

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handledownClick = () => {
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.togglealert("Copied to Clipboard", "warning");
  };

  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const clear = (event) => {
    let newText = "";
    setText(newText);
    props.togglealert("Text Cleared", "warning");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-5">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter Your Text Here"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handledownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={clear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={extraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary :</h2>
        <p>
          {text.split(" ").length} Words & {text.length} Characters.
        </p>
        <p> {(text.split(" ").length - 1) * 0.008} Minutes Read.</p>
        <hr />
        <h2>Preview :</h2>
        <p>{text}</p>
        
      </div>
    </>
  );
}
