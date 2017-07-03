import React, { Component } from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    const videoItems = props.videos.map((eachVideo) => {
        return <VideoListItem  video={eachVideo}/>
    })

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )

}

export default VideoList
