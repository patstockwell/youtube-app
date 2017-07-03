import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'

const API_KEY = 'AIzaSyDYYXX3F15bB6OTby2mFtHDFlbb2bl9pKk'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 200)
        return (
            <div className="App container">
                <SearchBar onSearchTermChange={videoSearch}/>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        videos={this.state.videos}
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
                </div>
            </div>
        );
    }
}

export default App;
