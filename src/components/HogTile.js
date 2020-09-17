import React from 'react';
// import hog-imgs from 'src/hog-imgs'
class HogTile extends React.Component{
    state ={
        clicked: false
    };

    getImage = () => {
        let imageName= this.props.h.name.split(" ").join("_").toLowerCase();
        let rightPic = require(`../hog-imgs/${imageName}.jpg`)
        return rightPic
    }

    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }

    render() {        
        return(
            <div className="ui four wide column">
                <div name="HogTile" className="ui card">
                    <div className="image">
                        <img src={this.getImage(this.props.h.name)} alt=" "/>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.h.name}</a>
                        <button className="ui button" onClick={this.handleClick}>{this.state.clicked ? "Less Oink" : "More Oink"}</button>
                            <div>
                                {this.state.clicked? (
                                    <div className="extra content">
                                    <div>{this.props.h.specialty}</div>
                                    <div>{this.props.h.weight} Stones</div>
                                    </div>)
                                : "Click for More Details"}
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}


export default HogTile;