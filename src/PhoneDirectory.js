import React, {Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            subscribers:[{
                id:1,
                name:'Siddharth',
                phone:'544646247'
            },{
                id:2,
                name:'Blumpf',
                phone:"0123"
            }]
        }
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribers = this.state.subscribers;
        if(subscribers.length>0){
            newSubscriber.id = subscribers[subscribers.length-1].id + 1;
        }else{
            newSubscriber.id = 1;
        }
        subscribers.push(newSubscriber);
        this.setState({subscribers:subscribers});
        console.log(this.state);
    }

    deleteSubscriberHandler = (subscriberID) => {
        let subscribers = this.state.subscribers;
        let foundSubscriberIndex = 0;
        
        subscribers.forEach(function(subscriber, index){
            if(subscriber.id == subscriberID){
                foundSubscriberIndex = index;
            }
        }, this);

        console.log('Subscriber Deleted : '+foundSubscriberIndex);

        if(foundSubscriberIndex>-1){
            subscribers.splice(foundSubscriberIndex,1);
        }
        this.setState({subscribers:subscribers});
    }

    render(){
        return (
            //<AddSubscriber addSubscriberHandler = {this.addSubscriberHandler}/>
            //<ShowSubscribers subscribers = {this.state.subscribers}/>
            <Router>
                <Route exact path = '/' render = {(props) => <ShowSubscribers {...props} subscribers = {this.state.subscribers} deleteSubscriberHandler = {this.deleteSubscriberHandler}/>} />
                <Route exact path = '/add' render = {({history},props) => <AddSubscriber history = {history} {...props} addSubscriberHandler = {this.addSubscriberHandler}/>} />
            </Router>
        )
    }
}


export default PhoneDirectory;