import React from 'react';

class Hog extends React.Component {

    state = {
        showInfo: false
    }

    handleClick = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    render(){
        const hog = this.props.hog
        let pigImage = require(`../hog-imgs/${hog.name.toLowerCase().replace(/ /g, "_")}.jpg`) //how can we dynamically generate the filename?
        //let showInfo = false
        return(
            <div className="ui eight wide column">
                <div className="ui card">
                    <div className="image" onClick={this.handleClick}>
                        <img src={pigImage} />
                    </div>
                    {this.state.showInfo ?
                    <div>
                        <div className="content">
                        <div className="header">
                        Name: {hog.name}
                        </div>
                        <div class="meta">
                            <span class="date">Weight: {hog.weight}</span>
                        </div>
                        <div className="description">
                            Specialty: {hog.specialty}                       
                        </div>
                    </div>
                    <div className="extra content">
                        Highest Medal Achieved: {hog["highest medal achieved"]}
                    </div> 
                    </div> : null
                    }
                    <button>❌</button>
                </div>
           </div>

        )
    }
}

export default Hog;
