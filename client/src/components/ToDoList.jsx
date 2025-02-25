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

    const statusChangeHandler = async (todoId, currentStatus) => {
        const taskUpdate = todos.find(todo => todo._id === todoId)

        if (!taskUpdate) return;

        const updatedTask = {
            ...taskUpdate,
            status: !currentStatus,
        }

        try {
            const response = await fetch(`http://localhost:3030/jsonstore/todos/${todoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask)
            })

            if (!response.ok) {
                throw new Error('Failed to change status!')
            }
            
            setTodos(oldTodo => oldTodo.map(todo => todo._id === todoId ? {...todo, status: !todo.status} : todo))
        } catch (error) {
            console.error(error.message);
        }
    }

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
                    {todos.map(todo =>
                        <ToDoItem
                            key={todo._id}
                            _id={todo._id}
                            task={todo.task}
                            status={todo.status}
                            onStatusChange={statusChangeHandler}
                        />
                    )}
                </tbody>
            </table>
        </>
    )
}