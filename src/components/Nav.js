import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
      <button onClick={props.filterHogs} value="alphabetical">Hogs A-Z</button>
      <button onClick={props.filterHogs} value="greased">Greased Hogs</button>
      <button onClick={props.filterHogs} value="weight">Weight</button>
      </div>
    </div>
  );
};

export default Nav;
