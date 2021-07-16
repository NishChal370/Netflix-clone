import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'

import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home/Home';
import Detail from './Components/Pages/Detail/Detail'
import './App.css';
import './Components/Pages/Login/Login.css';

import { setPopular, setTopRated, setTrending, setVideo, setMount } from './Redux/Action';
class App extends Component {
  fetchPopular(){
    let{ toShow, setPopular} = this.props;
    
    // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/${toShow}/popular?api_key=fe2b03e92cf5b71f1d11933c3e1889d0&language=en-US&page=1`)
      .then((response)=> {
        // handle success
        setPopular(response.data.results);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchTop_rated(){
    let{ toShow, setTopRated } = this.props;
    // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/${toShow}/top_rated?api_key=fe2b03e92cf5b71f1d11933c3e1889d0&language=en-US`)
      .then((response)=> {
        // handle success
        setTopRated(response.data.results);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchTrending(){
    let{ setTrending } = this.props;
    // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=fe2b03e92cf5b71f1d11933c3e1889d0`)
      .then((response)=> {
        // handle success
        setTrending(response.data.results);
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  fetchVideo(){
    let{toShow, selectedId, setVideo, setMount } = this.props;
    
    // Make a request for a user with a given ID
    axios.get(`https://api.themoviedb.org/3/${toShow}/${selectedId}/videos?api_key=fe2b03e92cf5b71f1d11933c3e1889d0&language=en-US`)
      .then((response)=> {
        // handle success
        setVideo(response.data.results);
        setMount();
      })
      .catch(function (error) {
        // handle error
        alert(error);
      });
  }

  componentDidMount(){
    this.fetchPopular();
    this.fetchTop_rated();
    this.fetchTrending();
  }

  componentDidUpdate(prevProps){
    let{data, selectedId, mount} = this.props
    let nowtoShow = data.changeCateogaryReducer.toShow;
    let prevtoShow = prevProps.toShow;
    if(nowtoShow !== prevtoShow){
      this.fetchPopular();
      this.fetchTop_rated();
    }
    if(selectedId !== undefined && mount){
      this.fetchVideo();
    } 
  }
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Login} /> 
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>
    );
  }
}

function mapStateToProps(state){
  let {changeCateogaryReducer, setSelectionReducer} = state;
  return{
    data: state,
    toShow: changeCateogaryReducer.toShow,
    selectedId: setSelectionReducer.selected.id,
    mount : setSelectionReducer.mount,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    setPopular: (e)=>dispatch(setPopular(e)),
    setTopRated: (e)=>dispatch(setTopRated(e)),
    setTrending: (e)=>dispatch(setTrending(e)),
    setVideo: (e)=>dispatch(setVideo(e)),
    setMount: ()=>dispatch(setMount()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
