import React, { Fragment } from "react";

class Filter extends React.Component {


  render() {
    return (
      <div className="ui form">
        <h3>Sort Type</h3>
        <div>
          <select onChange={event=>this.props.sortHogs(event.target.value)} name="type" id="type">
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
        <div>
          <button onClick={this.props.onShowHogs}>Sort Hogs</button>
        </div>
        <div>
          <button onClick={this.props.onShowHogs}>Show All Hogs</button>
        </div>
        <div>
          <button onClick={()=>this.props.filterHogs(this.props.hogState.hogs)}>Greased</button>
        </div>
      </div>
    );
  }
}

export default Filter;
