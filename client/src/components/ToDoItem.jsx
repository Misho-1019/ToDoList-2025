import styles from './ToDoItem.module.css'

export default function ToDoItem({
    _id,
    task,
    status,
    onStatusChange,
    onDelete,
}) {

    const todoClassName = [styles['pending']]

    if (status) {
        todoClassName.push(styles['completed'])
    }

    return (
        <>
            <tr className={todoClassName.join(' ')}>
                <td>{task}</td>
                <td className="status">{status ? 'Completed' : 'Pending'}</td>
                <td>
                    <button onClick={() => onStatusChange(_id, status)} className="toggle-btn">Change Status 🔄</button>
                    <button onClick={() => onDelete(_id)} className="toggle-btn">Delete ❌</button>
                </td>
            </tr>
        </>
    )
}