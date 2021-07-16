import React, { Component } from 'react'
import './home.css'
import TopDiv from './TopDiv';

import { connect } from 'react-redux';
import Cateogary from './Cateogary';
import Image from '../../Common/Image';
import NavBar from '../../Common/NavBar'
class Home extends Component {
    state={
        Popular:{
            noOfImg : 6,
            btnName : 'See more',
        },
        Trending:{
            noOfImg : 6,
            btnName : 'See more',
        },
        TopRated:{
            noOfImg : 6,
            btnName : 'See more',
        }
    }

    handleSeeMore=(e)=>{
        if (e.noOfImg === 6){ 
            e.noOfImg = 'all';
            e.btnName= 'See less';
        }else{ 
            e.noOfImg = 6;
            e.btnName ='See more'
        }
        this.setState({e});
       
    }

    render() {
        let{Popular, Trending, TopRated} = this.state;
        let {popularDetail, toShow, topRatedDetail, trendingDetail, history, inputValue} = this.props;
        

        let popularVideo = popularDetail.map((e,index)=>{
            let noOfImg= (Popular.noOfImg === 'all') ? popularDetail.length : 6;
            
            if(inputValue.toLowerCase() === ''){
                if(index < noOfImg){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')} detail={e} />;
                }
                else{
                    return null;
                }
            }else{
                let title = (e.title=== undefined) ? e.original_name : e.title
                if(title.toLowerCase().includes( inputValue.toLowerCase())){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')} detail={e}/>
                }else{
                    return null
                }
            }
            
        });


        let topRatedVideo = topRatedDetail.map((e,index)=>{
            let noOfImg= (TopRated.noOfImg === 'all') ? topRatedDetail.length : 6;
            
            if(inputValue.toLowerCase() === ''){
                if(index < noOfImg){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')} detail={e} />;
                }
                else{
                    return null
                }   
            }else{
                let title = (e.title=== undefined) ? e.original_name : e.title
                if(title.toLowerCase().includes( inputValue.toLowerCase())){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')}  detail={e} />
                }else{
                    return null
                }
            }
                    
        });
        let trendingVideo = trendingDetail.map((e,index)=>{
            let noOfImg= (Trending.noOfImg === 'all') ? trendingDetail.length : 6;
            
            if(inputValue.toLowerCase() === ''){
                if(index < noOfImg){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')} detail={e} />;
                }
                else{
                    return null
                } 
            }else{
                let title = (e.title=== undefined) ? e.original_name : e.title
                if(title.toLowerCase().includes( inputValue.toLowerCase())){
                    return <Image key={'pop'+index} change={()=>history.push('/detail')}  detail={e} />
                }else{
                    return null
                }
            }
                          
        });

        return (
            <div className="home-screen">
                <NavBar
                    title1= 'TV serial'
                    title2= 'Movie'
                    visible= 'visible'
                    fixNav= 'fixed'
                /> 
                <TopDiv/>
                <Cateogary
                    title='Popular'
                    cateogary={toShow} 
                    btnName= {Popular.btnName}
                    image ={popularVideo}
                    clickF ={()=>this.handleSeeMore(Popular)}
                />

                <Cateogary
                    title='Top Rated'
                    cateogary={toShow} 
                    btnName= {TopRated.btnName}
                    image ={topRatedVideo}
                    clickF ={()=>this.handleSeeMore(TopRated)}
                />

                <Cateogary
                    title='Trending'
                    cateogary={toShow} 
                    btnName= {Trending.btnName}
                    image ={trendingVideo}
                    clickF ={()=>this.handleSeeMore(Trending)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { fetchReducer, changeCateogaryReducer,setInputReducer} = state;
    return{ 
        popularDetail: fetchReducer.popular,
        topRatedDetail : fetchReducer.topRated,
        trendingDetail: fetchReducer.trending,
        inputValue: setInputReducer.searchName,
        toShow: changeCateogaryReducer.toShow,
    }
}


export default connect(mapStateToProps)(Home);