import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactPlayer from 'react-player'
import './Detail.css'
class VideoScreen extends Component {
    render() {
        let { videoDetail, show }=  this.props;
        let videoDetailSize = Object.keys(videoDetail).length;
        let TailerKey = (videoDetail[1] !== undefined && videoDetailSize !== 0) ? videoDetail[1].key : '';
        let TeaserKey = (videoDetail[0] !== undefined && videoDetailSize !== 0) ? videoDetail[0].key : '';
        return (
            <>
                {(show === '')
                    ? null 
                    :(show === 'Teaser')
                        ? <ReactPlayer className='react-player'
                                width='114rem'
                                height='60rem' 
                                controls playing 
                                url={`https://www.youtube.com/watch?v=${TeaserKey}`} 
                            />
                        : <ReactPlayer className='react-player'
                                width='114rem'
                                height='60rem'  
                                controls playing 
                                url={`https://www.youtube.com/watch?v=${TailerKey}`} 
                            />
                }
            </>
        )
    }
}


function mapStateToProps(state) {
    let { setVideoReducer, setToSeeReducer } = state;
    return{
        videoDetail: setVideoReducer.video,
        show : setToSeeReducer.show,        
    }
}

export default connect(mapStateToProps)(VideoScreen)