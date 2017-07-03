import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDYYXX3F15bB6OTby2mFtHDFlbb2bl9pKk'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: []
        }
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos})
        })
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
