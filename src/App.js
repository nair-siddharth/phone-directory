import Header from './Header.js';
import './App.css';


let subscribers = [
  {
    id:1,
    name:'Sidd',
    phone:Math.ceil(Math.random()*10000000000)
  },
  {
    id:2,
    name:'Vinod',
    phone:Math.ceil(Math.random()*10000000000)
  },
  {
    id:3,
    name:'Irene',
    phone:Math.ceil(Math.random()*10000000000)
  },
  {
    id:4,
    name:'Sonali',
    phone:Math.ceil(Math.random()*10000000000)
  },
  {
    id:5,
    name:'Vinod',
    phone:Math.ceil(Math.random()*10000000000)
  }
];

function deleteHandler(){
  alert('test');
}

function App() {
  let x = 1;
  let y = Math.ceil(Math.random()*1000);

  return (
    <div id = 'container'>

      {/* header moved to Header.js
       <div className="header">
        Phone Directory
      </div> */}
      
      <Header></Header>{/*Header as defined in Header.js*/}

      <button id = 'addBtn'>Add</button>
      <div class = 'infoBox'>
        <span class = 'info'>Name </span>
        <span class = 'info'>Phone </span>
      </div>


      {/* <div class = 'infoBox'>
        <span class = 'data'>Siddharth </span>
        <span class = 'data'>0544646247</span>
      </div> */}


      {
        subscribers.map(sub => {
          return <div key = {sub.id} className = 'infoBox'>
            <span className = 'data'>{sub.name}</span>
            <span className = 'data'>{sub.phone}</span>
            <button id = 'delBtn' onClick = {deleteHandler}>Delete</button>
          </div>
        })
      }

      {/* <label htmlFor = 'name'>Name </label>
      <input id = 'name' type = 'text' placeholder = 'Type Here' defaultValue = {x+y+"s"}></input> */}


    </div>

  );
}

export default App;
