import React from 'react'
// import imgs from '../hog-imgs.js'

export default class HogCard extends React.Component {

    state = {
        isActive: false
    };

    toggleDetails = () => {
        this.setState( previousState => {
            return { 
                isActive: !previousState.isActive}
            }) 
    }

    showDetails = () => {
        if (this.state.isActive === true) {
            return (
                <div>
                    <div class="greased">
                    <a>Greased: {this.props.hog.greased.toString()}</a>
                    </div>
                    <div class='weight'>
                        <a>Weight: {this.props.hog.weight} LBS</a> 
                    </div>
                    <div class='medal'>
                        <a>Highest Medal: {this.props.hog[ 'highest medal achieved' ]}</a>
                    </div>
                    <div class="specialty">
                        <a>Specialty: {this.props.hog.specialty}</a>
                    </div>
                </div>
            )
        } 
    }


    render() {
        let hogUndesrcoredName = this.props.hog.name.split(' ').join('_').toLowerCase()
        let hogImage = require(`../hog-imgs/${hogUndesrcoredName}.jpg`)
        return(
            <div className="ui card">
                <div onClick={ this.toggleDetails } class="image">
                    <img src={ hogImage } />
                </div>
                <div class="content">
                    <a class="header">{this.props.hog.name}</a>
                </div>
                <div className="details">
                    {this.showDetails()}
                </div>
            </div>
        )
    }
}