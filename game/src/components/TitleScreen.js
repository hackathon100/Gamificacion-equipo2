import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        <div id="logo"> </div>
        <ul id="menu">
        <span></span>
          <li>
            <span onClick={props.beginStory}>Comenzar</span>
          </li>


        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
