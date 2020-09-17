import React, { Fragment } from "react";
import hogs from "../porkers_data.js";
import HogCard from './HogCard.js'

class PigWorld extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui grid container">
        {this.props.hogs.map((hog, index) =>  <HogCard 
          key={index}
          hog={hog}
        />)}
      </div>
    );
  }
}

export default PigWorld;
