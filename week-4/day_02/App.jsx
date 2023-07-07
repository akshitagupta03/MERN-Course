import React, { useEffect } from "react";


function App() {
    const [todos, setTodoForToday] = React.useState([{
        title: "Go to gym",
        description: "Hit gym from 7-9",
        id: 1
    },
    {
        title: "Go to class",
        description: "Hit gym from 7-9",
        id: 2
    }]);

    return (
        <div>
            {todos.map( (todo) => {
                return <Todo title={todo.title} description = {todo.description}></Todo>
            })}
        </div>
    )
}

function Todo(props){
    return <div style = {{backgroundColor : "red"}}>
        {props.title}
        {props.description};
    </div>
}

export default App;
