const React = require('react')
const VideoItem = require('./VideoItem')

const VideoList = (props) => {
    const onVideoSelect = props.onVideoSelect
    const videos = props.videos
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

module.exports = VideoList