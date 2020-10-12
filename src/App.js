import React from "react";
import { render } from "react-dom";

  const layout = {
    textAlign:"center",
    padding:"50px",
    margin:"25px"
  };

function App() {

  return (
    <div className="App">
      <header className="App-header">
      
      </header>
    <body> 
   
    <div className="container">
      <div style={layout} className="item"> 
      <div><h1>Admin</h1></div>
    <form>
    <label>
        Username:
        <input type="text" name="name" />
      </label>
      <label>
        Password:
        <input type="text" name="password" />
      </label>
      
      <input type="submit" value="Submit" />
    </form>
    </div>
    </div>

    </body>

    
      
    </div>
  );
}

export default App;
