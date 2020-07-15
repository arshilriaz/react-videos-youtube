const React = require('react') 
const SearchBar = require('./SearchBar')
const youtube = require('../apis/youtube')
const VideoList = require('./VideoList')
const VideoDetail = require('./VideoDetail')

const KEY = 'AIzaSyAs9shk-riLmZ0ZWS4IpVlXSGpyzqEjkco'

class App extends React.Component {

    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.onTermSubmit('cars')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 15,
                key: KEY,
                q: term,
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        console.log(this.setState({selectedVideo: video}))
    }

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = App