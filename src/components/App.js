import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";

class App extends Component {

  state = {
    hogs: hogs
  }

  
  selectHogs = (e) => {
    console.log(e.target.value)
    let selectedHogs = []

    if(e.target.value === 'alphabetical'){
      selectedHogs = hogs.sort((a,b) =>{
        return a.name.localeCompare(b.name)
      })
    } else if(e.target.value === 'weight'){
      selectedHogs = hogs.sort((a,b) => {
        return a.weight - b.weight
      })
    } else if(e.target.value === 'greased'){
      selectedHogs = hogs.filter(hog => {
        return hog.greased === true
      })
    }

    this.setState({
      hogs: selectedHogs
    })
  }

  render() {
    return (
      <div className="App">
        <Nav 
        filterHogs={this.selectHogs}
        />
        <HogList 
        hogsList={this.state.hogs}
        />
      </div>
    );
  }
}

export default App;
