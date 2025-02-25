export default function ToDoItem({
    _id,
    task,
    status,
}) {
    return (
        <>
            <tr>
                <td>{task}</td>
                <td class="status completed">{status}</td>
                <td><button class="toggle-btn">Change Status</button></td>
            </tr>
        </>
    )
}