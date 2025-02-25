import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data)
                setTodos(result)
            })
            .catch(error => {
                console.error(error.message);
            })
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => <ToDoItem />)}
                </tbody>
            </table>
        </>
    )
}