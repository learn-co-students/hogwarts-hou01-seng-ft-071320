import React, {Component} from 'react';
//import pic from '../hog-imgs/augustus_gloop.jpg'



export default class Hog extends Component {

    state ={
        clicked : false,
        hideCard : false
    }



    handleClick = (event) =>{
        event.preventDefault()
        let clicked = this.state.clicked
        // event.target.parentElement.innerText = ""
        console.log(clicked)
        this.setState({clicked: !clicked})
        
    }

    renderDetails = () => {
        
        return(
            <div onClick={this.handleClick}>
                <h3>Specialty: {this.props.hog.specialty}</h3>
                <h3>{this.props.hog.greased === true ? "Greased" : "Not Greased"}</h3>
                <h3>Weight: {this.props.hog.weight}</h3>
            </div>
        )
    }

    renderPic = () => {
        let imageName = this.props.hog.name.split(' ')
        let lowercase = imageName.map(word =>{
            return word.toLowerCase()
        })
        let fileName = lowercase.join('_')
        let filePath = require(`../hog-imgs/${fileName}.jpg`)
        //console.log(filePath)
        return(
            <div onClick={this.handleClick}>
                    <img src={filePath} alt="" />
                <h3>{this.props.hog.name}</h3>
            </div>
        )
    }

    handleHideClick = (event) =>{
        let hiding = this.state.hideCard
        this.setState({hideCard: !hiding})
        
        console.log(hiding)
    }

    render() {
        return(
            <div className="ui cards">

                <div className="card">
                    {
                        this.state.hideCard ? null: (this.state.clicked ? this.renderDetails() : this.renderPic())
                    }
                    {
                        this.state.hideCard ? <button onClick={this.handleHideClick}>Un-Hide</button> : <button onClick={this.handleHideClick}>Hide</button>
                    }
                </div>
            </div>

        )
    }
}
