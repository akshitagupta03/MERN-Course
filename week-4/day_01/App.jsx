import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [todo, setTodo] = useState({
        title: "go to gym",
        description: "go the gym at 7",
        id: 1,
    })

    setInterval( () => {
        setTodo({
            title: "go eat something",
            description: "go eat", 
            id: 1
        })
        todo.title = "123";
    }, 2000)

    return (
        <div>
            <h1>Hi there</h1>
            <span>{todo.title}</span>
            {todo.description}
            {todo.id}
            <PersonName firstName = {todo.title} lastName = {"Gupta"}></PersonName>
        </div>
    )
}

function PersonName(props){
    return <div>
        {props.firstName} {props.lastName}
    </div>
}

export default App
