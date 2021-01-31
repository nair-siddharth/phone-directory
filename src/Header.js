import React, { Component } from 'react';

//functional component
const Header = function(){
    return (
        <div className="header">
        Phone Directory
      </div>
    );
}

// Class Component - Used if there are state variable to be assigned 
// class Header extends Component{
//     render(){
//         return (
//             <div className="header">
//             Phone Directory
//           </div>
//         );  
//     }
// }


export default Header;