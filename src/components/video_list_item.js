import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <img src={imageUrl} alt="youtube thumbnail"/>
                <div className="media-body">
                    <p>{video.snippet.title}</p>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
