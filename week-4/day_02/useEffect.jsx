import React, { useEffect } from "react";

// hook

// useState is used for synchronous calls only

function App() {
    const [todoForToday, setTodoForToday] = React.useState({
        title: "Go to gym",
        description: "Hit gym from 7-9",
        id: 1
    });
    const [counter, setCounter] = React.useState(Math.random());
    
    // useEffect()
    // takes a function as first input, and array as second input

    console.log("above useEffect")
    React.useEffect( () => {
        console.log("added interval");
        setInterval( () => {
            setTodoForToday({
                title: "Go to gym" + Math.random(),
                description: "Hit gym from 7-9",
                id: 1
            })
        }, 1000)
    }, []);


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
