import React, {Component} from 'react';

export default class Filters extends Component {
    render() {
        return (
            <div className="ui form">

                <div className="field">
                <select name="type" id="type" onChange={(e)=>this.props.onChangeType(e.target.value)}>
                    <option value="all">All</option>
                    <option value="greased">Greased</option>
                    <option value="ungreased">Ungreased</option>
                </select>
                </div>
            </div>
        )
    }
}