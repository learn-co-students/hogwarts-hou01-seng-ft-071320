import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigWorld from "./PigWorld";
import PigFilter from "./PigFilter";

class App extends Component {

  state = {
    currentHogs: hogs,
    greaseFilter: false,
    alphabeticalSorting: false,
    weightSorting: false,
    selectedOption: null
  }

  toggleGreaseFilter = () => {
    this.setState( previousState => {
        return { 
            greaseFilter: !previousState.greaseFilter} 
        }, this.greaseFn()) 
  }

  toggleAlphabeticalSorting = (e) => {
    this.setState( previousState => {
        return { 
            alphabeticalSorting: !previousState.alphabeticalSorting} 
        }, this.alphabetFn(e)) 
  }
  toggleWeightSorting = (e) => {
    this.setState( previousState => {
        return { 
            weightSorting: !previousState.weightSorting} 
        }, this.weightFn(e)) 
  }

  greaseFn = () => {
    console.log(this.state.greaseFilter)
    let piggies = this.state.currentHogs

    let filteredPiggies = piggies.filter(pig => {
      return pig.greased === true
    })

    this.setState({ currentHogs: filteredPiggies}, () => {console.log('should have filtered')})
    
  }

  alphabetFn = (arg) => {
    let piggies = this.state.currentHogs

    let sortedPiggies = piggies.sort((a,b) => a.name.localeCompare(b.name)) 
    this.setState({ currentHogs: sortedPiggies}, this.changeSelection(arg))
  }

  weightFn = (arg) => {
    console.log(this.state.weightSorting)
    let piggies = this.state.currentHogs

    let sortedWeightPiggies = piggies.sort((a,b) => a.weight - b.weight)
    this.setState({ currentHogs: sortedWeightPiggies}, this.changeSelection(arg))
  }

  changeSelection = arg => {
    this.setState( {selectedOption: arg.target.value} )
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <PigFilter toggleGreaseFilter={this.toggleGreaseFilter} toggleAlphabeticalSorting={this.toggleAlphabeticalSorting}
        toggleWeightSorting={this.toggleWeightSorting} changeSelection={this.changeSelection} selectedOption={this.state.selectedOption}/>
        <PigWorld hogs={this.state.currentHogs} />
      </div>
    );
  }
}

export default App;


