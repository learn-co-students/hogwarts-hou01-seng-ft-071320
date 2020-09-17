import React from 'react'

export default class PigFilter extends React.Component {

    throwShade2 = () => {
        if (this.props.selectedOption === 'option2') {
            return true
        } else if (this.props.selectedOption === null) {
            return false
        }
    }

    throwShade3 = () => {
        if (this.props.selectedOption === 'option3') {
            return true
        } else if (this.props.selectedOption === null) {
            return false
        }
    }

    render() {
        return (
            <form>
                <div className="radio">
                <label>
                    <input onChange={this.props.toggleGreaseFilter} type="radio" value="option1" />
                    Greased?
                </label>
                </div>
                <div className="radio">
                <label>
                    <input onChange={this.props.toggleWeightSorting} type="radio" value="option2" checked={this.throwShade2()}/>
                    Weight Sorted
                </label>
                </div>
                <div className="radio">
                <label>
                    <input onChange={this.props.toggleAlphabeticalSorting} type="radio" value="option3" checked={this.throwShade3()}/>
                    Name
                </label>
                </div>
            </form>
        )
    }
}