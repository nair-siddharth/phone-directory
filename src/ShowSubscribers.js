import React, {Component} from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import {Link} from 'react-router-dom';

// let subscribers = [
//   {
//     id:1,
//     name:'Sidd',
//     phone:Math.ceil(Math.random()*10000000000)
//   },
//   {
//     id:2,
//     name:'Vinod',
//     phone:Math.ceil(Math.random()*10000000000)
//   },
//   {
//     id:3,
//     name:'Irene',
//     phone:Math.ceil(Math.random()*10000000000)
//   },
//   {
//     id:4,
//     name:'Sonali',
//     phone:Math.ceil(Math.random()*10000000000)
//   },
//   {
//     id:5,
//     name:'Vinod',
//     phone:Math.ceil(Math.random()*10000000000)
//   }
// ];

function deleteHandler(argText){
  alert(argText);
}


class ShowSubscribers extends Component{


  onDeletedClick = (subscriberID) => {
    this.props.deleteSubscriberHandler(subscriberID);
  }

  render() {
    let x = 1;
  let y = Math.ceil(Math.random()*1000);

  return (
    <div id = 'container'>

      {/* header moved to Header.js
       <div className="header">
        Phone Directory
      </div> */}
      
      <Header heading = "Phone Directory - Dynamic Heading"></Header>{/*Header as defined in Header.js*/}

      <Link to = '/add'><button className = 'addBtn'>Add</button></Link>
      <div className = 'infoBox'>
        <span className = 'info'>Name </span>
        <span className = 'info'>Phone </span>
      </div>


      {/* <div class = 'infoBox'>
        <span class = 'data'>Siddharth </span>
        <span class = 'data'>0544646247</span>
      </div> */}


      {
        this.props.subscribers.map(sub => {
          return <div key = {sub.id} className = 'infoBox'>
            <span className = 'data'>{sub.name}</span>
            <span className = 'data'>{sub.phone}</span>
            {/*<button id = 'delBtn' onClick = {() => deleteHandler('Delete Clicked')}>Delete</button>*/}
            <button id = 'delBtn' onClick = {this.onDeletedClick.bind(this,sub.id)}>Delete</button>
          </div>
        })
      }

      {/* <label htmlFor = 'name'>Name </label>
      <input id = 'name' type = 'text' placeholder = 'Type Here' defaultValue = {x+y+"s"}></input> */}


    </div>

  );
  }
}


// function App() {
//   let x = 1;
//   let y = Math.ceil(Math.random()*1000);

//   return (
//     <div id = 'container'>

//       {/* header moved to Header.js
//        <div className="header">
//         Phone Directory
//       </div> */}
      
//       <Header heading = "Phone Directory - Dynamic Heading"></Header>{/*Header as defined in Header.js*/}

//       <button className = 'addBtn'>Add</button>
//       <div class = 'infoBox'>
//         <span class = 'info'>Name </span>
//         <span class = 'info'>Phone </span>
//       </div>


//       {/* <div class = 'infoBox'>
//         <span class = 'data'>Siddharth </span>
//         <span class = 'data'>0544646247</span>
//       </div> */}


//       {
//         subscribers.map(sub => {
//           return <div key = {sub.id} className = 'infoBox'>
//             <span className = 'data'>{sub.name}</span>
//             <span className = 'data'>{sub.phone}</span>
//             <button id = 'delBtn' onClick = {() => deleteHandler('Delete Clicked')}>Delete</button>
//           </div>
//         })
//       }

//       {/* <label htmlFor = 'name'>Name </label>
//       <input id = 'name' type = 'text' placeholder = 'Type Here' defaultValue = {x+y+"s"}></input> */}


//     </div>

//   );
// }

export default ShowSubscribers;
