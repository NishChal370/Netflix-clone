import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from '../../Database/Data'
import './NavBar.css'
import { getMovie, getSerial, setInput} from '../../Redux/Action'
class NavBar extends Component {
    handleChange=(e)=>{
        this.props.setInput(e);
        
    }
    render() {
        let{getSerial,getMovie, title1, title2, inputValue, visible, fixNav} = this.props;

        return (
            <nav className="navbar navbar-expand-lg " style={{position : fixNav, width: '100%'}}>
                <div className="container-fluid">
                    <img src={Data.logo} alt="logo" className="d-inline-block align-text-top"/>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <p onClick={getSerial} className="nav-link">{title1}</p>
                            <p onClick={getMovie} className="nav-link" >{title2}</p>
                        </div>
                        <input type="text" value={inputValue}  onChange={(e)=>this.handleChange(e)} placeholder='Search...' style={{visibility: visible}} />
                    </div>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return{
        inputValue : state.setInputReducer.searchName,
        popular : state.fetchReducer.popular,
        topRated: state.fetchReducer.topRated,
        trending: state.fetchReducer.trending,
    }
}

function mapDispatchToProps(dispatch){
    return{
        getMovie: ()=> dispatch(getMovie()),
        getSerial: ()=> dispatch(getSerial()),
        setInput: (e)=> dispatch(setInput(e)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
// export default NavBar;

