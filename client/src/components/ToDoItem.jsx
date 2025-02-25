export default function ToDoItem() {
    return (
        <>
            <tr>
                <td>Read a book</td>
                <td class="status completed">Completed</td>
                <td><button class="toggle-btn">Change Status</button></td>
            </tr>
        </>
    )
}