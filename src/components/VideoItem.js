const React = require('react')
require('./VideoItem.css')

const VideoItem = (props) => {
    const video = props.video
    return(
        <div onClick={() => props.onVideoSelect(video)} className="video-item item">
            <img alt={video.snippet} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="header">
                {video.snippet.title}
            </div>
        </div>
    )
}

module.exports = VideoItem