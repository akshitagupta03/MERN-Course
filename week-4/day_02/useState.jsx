import React, { useEffect } from "react";

// hook

function App() {
    const [todoForToday, setTodoForToday] = React.useState({
        title: "Go to gym",
        description: "Hit gym from 7-9",
        id: 1
    });
    const [counter, setCounter] = React.useState(Math.random());
    var nonStateVariable = Math.random();
    console.log(todoForToday);
    console.log(counter);
    console.log(nonStateVariable);

    console.log("render");
    setTimeout( () => {
        setTodoForToday({
            title: "Go to gym please please please" + Math.random(),
            description: "Hit gym from 7-9",
            id: 1
        }) 
    }, 5000)
    
    return(
        <div> 
            {todoForToday.title}
            <br/>
            {todoForToday.description}
            <br />
            {counter}
        </div>
    )
}

export default App;
