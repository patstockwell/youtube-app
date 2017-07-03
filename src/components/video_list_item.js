import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <img src={imageUrl} alt="youtube thumbnail"/>
                <div className="media-body">
                    <h5>{video.snippet.title}</h5>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
