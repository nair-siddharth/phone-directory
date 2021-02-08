import React, { Component } from 'react';
import './Header.css';

//functional component
// const Header = function(){
//     return (
//         <div className="header">
//         Phone Directory

//         {/* <Header/>  --  This will call this component, causing an infinite loop. 
//         This will make the page unresponsive */}
//       </div>
//     );
// }

//Class Component - Used if there are state variable to be assigned 
class Header extends Component{
    render(){
        return (
            /*style = {HeaderStyle}*/
            <div className="header" >
            <h1>{this.props.heading}</h1>
          </div>
        );  
    }
}

const HeaderStyle = {
    textAlign:'center',
    padding:20,
    background:'black', 
    color:'white', 
    textTransform:'upperCase',
};

export default Header;