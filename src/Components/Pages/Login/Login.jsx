import React, { Component } from 'react'
import './Login.css'

import Data from '../../../Database/Data';
import NavBar from '../../Common/NavBar';
import {Div1, Div2} from './MiddleDivs';
class Login extends Component {
    state={
        email:'',
        conformEmail: '',
        emailInvalidColor : '',
        emailExample: '',
    }

    handleEmailChange(e){
        let value = e.target.value;
        this.setState({emailInvalidColor: '', email : value});
    }
    conformMail(){
        let{email} = this.state;
        const emailRegx = "^[a-zA-Z0-9+_.-]+@[a-zA-Z]+[.][a-z]+";
        if(!email.match(emailRegx)){
            this.setState({emailInvalidColor: 'red', emailExample: 'example@netflix.com'});
        }
        else{
            this.setState({conformEmail: email});
            this.props.history.push('/home'); // route to another page Home.jsx
        }
    }

    render() {
        const {title, description, div, question, buttonName} = Data.LoginPage;
        //page titles
        const Titles = title.map((e, index)=>{
            return <h1 key={'titl'+index}>{e}</h1>
        });

        const Descp = description.map((e, index)=>{
            return <p key={'desc'+index}>{e}</p>
        });
        //page body having image
        const BodyInfo = div.map((data, index)=>{
            let value;
            (index%2 ===  0)
                ?   value =
                        <Div1   key={'bdyinf'+index} 
                            index={index}       image={data.img}    
                            heading={data.h}    paragraph={data.p}
                        />
                :   value = 
                        <Div2   key={'bdyinf'+index} 
                            index={index}       image={data.img}    
                            heading={data.h}    paragraph={data.p}
                        />;
            return value;
        });
        // page end questions
        const Questions = question.map( (question, index) => <p key={'ques'+index}>{question}</p> );
        //******************End render******************* */
        
        return (
            <div className='login-div'>
                <div className='login-home'>
                    <NavBar visible= 'hidden'/>
                    <div className='login-home-info'>
                        {Titles}
                        {Descp}
                        <input value={this.state.email} placeholder={this.state.emailExample} onChange={(e)=> this.handleEmailChange(e)} style={{borderColor : this.state.emailInvalidColor}}/>
                        <button type="submit" className="btn btn-primary mb-2" onClick={()=>{this.conformMail()}}>{buttonName}</button>
                    </div>
                </div>
                
                <div className='login-body'>
                    {BodyInfo}  
                    <div className='login-body-ques'>
                        <h1>Frequently asked Question</h1>
                        {Questions}
                    </div>               
                </div>
            </div>
        )
    }
}
export default Login