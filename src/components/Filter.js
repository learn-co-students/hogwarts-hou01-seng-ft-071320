import React, {Component} from 'react';



export default class Filter extends Component {



    render() {
        return(
            <div>
                <input type="checkbox" id="greased" name="greased" onClick={this.props.handleGreased}></input>
                <label for="greased">Only Greased?</label>    
                <input type="radio" id="sort by name" name="sort" value="name" onClick={this.props.handleNameSort}></input>
                <label for="sort">Sort By Name</label>
                <input type="radio" id="sort by weight" name="sort" value="weight" onClick={this.props.handleWeightSort}></input>
                <label for="sort">Sort By Weight</label>
            </div>
        )
    }
}