import React, { Component } from 'react'
import logo from '../youtube-logo.png'

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        })
        this.props.onSearchTermChange(this.state.term)
    }

    render() {
        return (
            <div className="search-bar row">
                <div className="col-md-3 app-name">
                    <img src={logo} className="search-bar-logo"/> <span className="top5">Top 5</span>
                </div>
                <input value={this.state.term} onChange={this.onInputChange} className="form-control col-md-6"/>
            </div>
        )
    }
}

export default SearchBar
