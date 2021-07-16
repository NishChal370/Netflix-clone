import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelection } from '../../Redux/Action'
class Image extends Component {
    changeFrame=()=>{
        let{ detail, change , setSelection} = this.props;

        setSelection(detail);
        change();
    }
    render() {
        let{ detail,size } = this.props;

        return (
            <div  className="image" onClick={this.changeFrame} style={{width : size}}>
                <img className="card-img-top" src={'https://image.tmdb.org/t/p/w1280'+detail.poster_path} alt="Card-img cap"/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        setSelection : (e)=> dispatch(setSelection(e))
    }
}

export default connect(null, mapDispatchToProps)(Image);