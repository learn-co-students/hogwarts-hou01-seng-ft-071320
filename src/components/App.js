import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HOGS from "../porkers_data";
import Filter from "./Filter";
import PigTile from "./PigTile"

class App extends Component {

  state = {
    hogs: HOGS,
    filter: 'all',
    sort: 'name',
    greased: false
  }
  
  filterHogs = (oldHogs)=>{
    this.setState({
      greased: !this.state.greased,
      hogs: oldHogs.filter(hog=> hog.greased === true)
    })
  }

  sortHogs = (newSort)=>{
    this.setState({
      sort: newSort
    })
  }

  showHogs = ()=>{
    let sort = ''
    switch(this.state.sort){
      case 'name': sort = HOGS.sort((a, b) => a.name.localeCompare(b.name))
      break;
      case 'weight': sort = HOGS.sort((a, b) => a.weight-b.weight)
      break;
      default:
      break;
    }
    return sort;
  }

  onShowHogs = ()=>{
    this.setState({
      hogs: this.showHogs()
    })
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter sortHogs={this.sortHogs} filterHogs={this.filterHogs} onShowHogs={this.onShowHogs} hogState={this.state}/>
        {this.state.hogs.map((hog,index)=> <PigTile hog={hog} index={index}/>)}
      </div>
    );
  }
}

export default App;
