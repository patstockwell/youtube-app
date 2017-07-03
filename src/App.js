import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDYYXX3F15bB6OTby2mFtHDFlbb2bl9pKk'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        return (
            <div className="App">
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
            </div>
        );
    }
}

export default App;
