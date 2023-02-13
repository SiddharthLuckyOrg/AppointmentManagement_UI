import React from 'react';
import {Greet} from "./components/Greet";
import './App.css';
import {Person} from "./components/Person";
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";

function App() {
    const personName = {
        firstName: "Bruce",
        lastName: "Wayne"
    }
  return (
    <div className="App">
        <Greet name = "Check" count={20} isLoggedIn={true}/>
        <Person name={personName}/>
        <Status status="error"/>
        <Heading>Placeholder Text</Heading>
        <Oscar>
            <Heading>Oscar goes to leo from child</Heading>
        </Oscar>
        <Greet count = {20} isLoggedIn={false}/>
    </div>
  );
}

export default App;
