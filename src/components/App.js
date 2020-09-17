import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import HogPage from "./HogPage";
import Filters from './Filters'

class App extends Component {

  constructor() {
  super()
    this.state = {
      hogs: hogs
    }
  }
  

  changeType = (selected) => {
    if(selected === 'greased'){
      
      this.setState({
        hogs: hogs.filter(hog => hog.greased === true)
        })
    } else if (selected === 'ungreased') {
      
      this.setState({
        hogs: hogs.filter(hog => hog.greased === false)
        })
    } else {
      this.setState({
        hogs: hogs
        })
    }
  }
  sortByname=()=>{
    this.setState({
      hogs: hogs.sort((a,b) => {
        let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
      })
      })
  }

  sortByWeight=()=>{
    this.setState({
      hogs: hogs.sort((a,b) => {
        return a.weight - b.weight;
      })
      })
  }
  // console.log(newHogs)
  // console.log(selected)
  
  render() {
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <Filters onChangeType={this.changeType}/>
        <button className="sort by name" onClick={this.sortByname}>Sort By Name</button>
        <button className="sort by weight" onClick={this.sortByWeight}>Sort By Weight</button>
        <HogPage hogs={this.state.hogs}/>
      </div>
    );
  }
}


export default App;
