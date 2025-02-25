import ToDoItem from "./ToDoItem";

export default function ToDoList() {
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
                    <ToDoItem />
                </tbody>
            </table>
        </>
    )
}