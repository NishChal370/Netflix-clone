import React, { Component } from 'react'
import './home.css'

export default class Cateogary extends Component {
    render() {
        let { title, cateogary, btnName, image, clickF} = this.props
        return (
            <div className="cateogary-div">
                <div className="cateogary-title-div">
                    <h1>{title} {cateogary}</h1>
                    <p onClick={clickF}>{btnName}</p>
                </div>
                <div className="cateogary-image-div">
                
                {([...new Set(image)].length === 1)
                    ? <h1 style={{color: 'red', fontStyle:'italic'}}>Item Not Found</h1>
                    : image
                }
                </div>
            </div>
        )
    }
}
