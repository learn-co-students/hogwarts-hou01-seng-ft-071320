import React from "react";
import Hog from './Hog'


class HogPage extends React.Component {
    
  render() {
    
    return (
      <div className="ui grid container">
        {this.props.hogs.map( hog => <Hog key={hog.id} hog={hog} />)}
      </div>

    );
  }
}

export default HogPage;
