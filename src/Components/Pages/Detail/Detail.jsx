import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../Common/NavBar';
// import Image from '../../Common/Image';
import {setToSee} from '../../../Redux/Action'
import VideoScreen from './VideoScreen';
import './Detail.css'
class Detail extends Component {
    render() {
        let  { selected, setToSee } = this.props;
        let image_path  = (selected.backdrop_path === null) ? selected.poster_path : selected.backdrop_path;
        return (
            
            <div className='Detail-screen' >
                {(Object.keys(this.props.selected).length !== 0)
                    ?   < >
                            <div className='top-img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${image_path})`}} >
                                <NavBar visible='hidden'/>
                            </div>
                            <div className="container" >
                                <div className="container_row">
                                        <div className='image-div'>
                                            <img className="card-img" src={'https://image.tmdb.org/t/p/w1280'+selected.poster_path} alt="Card-img cap"/>
                                        </div>
                                        <div className='container-info'>
                                            <h1>{selected.title || selected.name}</h1>
                                            <h3 >Original title:  {selected.original_title || selected.name}</h3>
                                            <p >Original language:  {(selected.original_language === 'en' ? 'English' : selected.original_language )}</p>
                                            <p >Popularity:  {selected.popularity}</p>
                                            <p>Release Date:  {selected.release_date}</p>
                                            <p>Overview:  {selected.overview}</p>
                                            <span style={{display: 'flex', gap:'2rem', color:'blue'}}>
                                                <h2 onClick={()=>setToSee('Teaser')}>Teaser</h2>
                                                <h2 onClick={()=>setToSee('Tailer')}>Tailer</h2>
                                            </span>
                                            
                                        </div>
                                    </div>
                                </div>
                            <div style={{ paddingBottom: '6rem'}}>   
                                <VideoScreen/>
                            </div>
                        </>
                    :   <>
                            <NavBar visible='hidden'/>
                            <p className='empty-message'> Data Not Found</p>
                        </>

                }
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        selected : state.setSelectionReducer.selected
    }
}

function mapDispatchToProps(dispatch){
    return{
        setToSee: (e)=> dispatch(setToSee(e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
