import React, { Component } from 'react'

import { connect } from 'react-redux'

import './home.css'
class TopDiv extends Component {
    render() {
        let {popularMovie} = this.props;
        
        
        return (
            <>
            {(popularMovie !== undefined)
                ? <div className='top-div' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${popularMovie.poster_path})`}}>
                        <div className='top-div-info'>
                            <h1>{(popularMovie.title=== undefined) ? popularMovie.original_name : popularMovie.title}</h1>
                            <h4>{(popularMovie.release_date=== undefined) ? popularMovie.first_air_date : popularMovie.release_date}</h4>
                            <p>{popularMovie.overview}</p>
                        </div>
                    </div>
                : null
            }
            </>

        )
    }
}

function mapStateToProps(state){
    return{
        popularMovie : state.fetchReducer.popular[0],
    };
}

export default connect(mapStateToProps)(TopDiv)