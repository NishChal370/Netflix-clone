const Div1=(props)=>{
    return(
        <div key={'bdyinf'+props.index} className='login-body-div'>
            <img src={props.image}  alt='logo pic'/>
            <div className='login-body-div-info'>
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );
}

const Div2=(props)=>{
    return(
        <div key={'bdyinf'+props.index} className='login-body-div'>
            <div className='login-body-div-info'>
                <h1>{props.heading}</h1>
                <p>{props.paragraph}</p>
            </div>
            <img src={props.image}  alt='logo pic'/>
        </div>
    );
}
export {Div1, Div2}