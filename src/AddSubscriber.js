import React, { Component } from "react";
import Header from './Header.js';
import './ShowSubscribers.css'; 
import './AddSubscriber.css';
import ShowSubscribers from "./ShowSubscribers.js";
import {Link} from 'react-router-dom';


class AddSubscriber extends Component{

    constructor(){
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        };
    }

    inputChangedHandler = (e) =>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) =>{
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id:0,name:'',phone:''});
        this.props.history.push('/');
    }

    viewSubscribers(){
        console.log('Back');
    }


    render(){
        return(
            <div>
                
                <Header heading = "Add Subscriber"/>
                <div className = 'component-body-container'>
                    <Link to = '/'>
                        <button className = 'custom-btn' id = 'backBtn' onClick = {this.viewSubscribers}>Back</button>
                    </Link>
                    
                    <form className = 'subForm' onSubmit = {this.onFormSubmitted.bind(this)}>
                        <div className = 'formInputs-sub'>
                            <label htmlFor = 'name'>Enter Name </label>
                            <input type = 'text' id = 'name' name = 'name' onChange = {this.inputChangedHandler}></input>
                        </div>
                        <div className = 'formInputs-sub'>
                            <label htmlFor = 'phone'>Enter Phone Number </label>
                            <input type = 'text' id = 'phone'  name = 'phone' onChange = {this.inputChangedHandler}></input>
                        </div>
                        <div className = 'subInfo'>
                            <span className = 'subInfoHdr'>Subscriber to be added:</span>
                            <span className = 'subInfoText'>Name : {this.state.name}</span>
                            <span className = 'subInfoText'>Phone Number : {this.state.phone}</span>
                        </div>
                        <button type = 'submit' className = 'addBtn'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscriber;