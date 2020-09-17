import React,{Component} from 'react';
import augustus_gloop from './../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from './../hog-imgs/bay_of_pigs.jpg'
import cherub from './../hog-imgs/cherub.jpg'
import galaxy_note from './../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from './../hog-imgs/leggo_my_eggo.jpg'
import mudblood from './../hog-imgs/mudblood.jpg'
import piggy_smalls from './../hog-imgs/piggy_smalls.jpg'
import porkchop from './../hog-imgs/porkchop.jpg'
import rainbowdash from './../hog-imgs/rainbowdash.jpg'
import sobriety from './../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from './../hog-imgs/the_prosciutto_concern.jpg'
import trouble from './../hog-imgs/trouble.jpg'
import truffleshuffle from './../hog-imgs/truffleshuffle.jpg'

export default class PigTile extends Component{

    imgHash = {
        'Augustus Gloop':  augustus_gloop,
        'Bay of Pigs': bay_of_pigs,
        'Cherub': cherub,
        'Galaxy Note': galaxy_note,
        'Leggo My Eggo': leggo_my_eggo,
        'Mudblood': mudblood,
        'Piggy smalls': piggy_smalls,
        'Porkchop': porkchop,
        'Rainbowdash': rainbowdash,
        'Sobriety': sobriety,
        'The Prosciutto Concern': the_prosciutto_concern,
        'Trouble': trouble,
        'TruffleShuffle': truffleshuffle
    }

    showDetail = (e)=>{

        switch(e.currentTarget.lastElementChild.hidden){
            case false: e.currentTarget.lastElementChild.hidden = true
                break;
            case true: e.currentTarget.lastElementChild.hidden = false
                break;
            default:
                break;
        }

    }

    render(){
        return(
            <div>
                <div  className='pigTile' onClick={e=>this.showDetail(e)}>
                    <h3>{this.props.hog.name}</h3>
                    <img src={this.imgHash[this.props.hog.name]} alt=''/>
                    <ul className='ul' hidden='true'>
                        <li>{this.props.hog.specialty}</li>
                        <li>{this.props.hog.greased}</li>
                        <li>{this.props.hog.weight}</li>
                        <li>{this.props.hog['highest medal achieved']}</li>
                    </ul>
                </div>
            </div>
        )
    }
}