import React from "react";
import HogTile from './HogTile';

class HogList extends React.Component {
  render() {
    return(
      <div className="ui grid container">
        {this.props.hogsList.map(h => (
          <HogTile 
          key={h.name}
          h={h}
          />
        ))}
      </div>
    )
  }
}

export default HogList;