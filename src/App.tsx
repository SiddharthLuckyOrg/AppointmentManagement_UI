import React from 'react';
import {Greet} from "./components/Greet";
import './App.css';
import {Person} from "./components/Person";

function App() {
    const personName = {
        firstName: "Bruce",
        lastName: "Wayne"
    }
  return (
    <div className="App">
        <Greet name = "Check" count={20} isloggedIn={true}/>
        <Person name={personName}/>
    </div>
  );
}

export default App;
