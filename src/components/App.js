import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
//import HelloWorld from "./HelloWorld";
import Hog from "./Hog";
import Filter from "./Filter";

const sorter = {
  null: () => {},
  name: (a, b) => a.name.localeCompare(b.name),
  weight: (a, b) => a.weight - b.weight
}


class App extends Component {
  
  state = {
    hogs: hogs,
    greased: null,
    sort: null,
    
    }
  
    handleGreased = (event) => {
      const greased = this.state.greased
      if(greased === true) {
        this.setState({
          greased: null
        })
        
      } else {
        this.setState({
          greased: true
        })
        
      }
    }

    


    handleNameSort = (event) => {
        this.setState({
          sort: "name"
        })
        console.log(this.state.sort)
    }
    
    handleWeightSort = (event) => {
        this.setState({
          sort: "weight"
        })
        console.log(this.state.sort)
    }

    
  
  render() {
    
    

    return (
      <div className="App">
        <Nav />
        <Filter handleGreased={this.handleGreased} handleNameSort={this.handleNameSort} handleWeightSort={this.handleWeightSort}/>
        {
          this.state.hogs.filter(greasedhog => greasedhog.greased || !this.state.greased).sort(sorter[this.state.sort]).map(hog => <Hog hog={hog} key={hog.name} />)
        }
      </div>
    );
  }
}

export default App;
