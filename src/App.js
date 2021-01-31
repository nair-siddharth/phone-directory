import Header from './Header.js';

function App() {
  let x = 1;
  let y = Math.ceil(Math.random()*1000);

  return (
    <div>

      {/* header moved to Header.js
       <div className="header">
        Phone Directory
      </div> */}
      
      <Header></Header>{/*Header as defined in Header.js*/}

      <button>Add</button>
      <div>
        <span>Name </span><br />
        <span>Phone </span>
      </div>

      {/* <label htmlFor = 'name'>Name </label>
      <input id = 'name' type = 'text' placeholder = 'Type Here' defaultValue = {x+y+"s"}></input> */}


    </div>

  );
}

export default App;
