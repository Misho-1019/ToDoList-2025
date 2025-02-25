import styles from './ToDoItem.module.css'

export default function ToDoItem({
    _id,
    task,
    status,
}) {

    const todoClassName = [styles['pending']]

    if (status === 'Completed') {
        todoClassName.push(styles['completed'])
    }

    return (
        <>
            <tr className={todoClassName.join(' ')}>
                <td>{task}</td>
                <td class="status completed">{status}</td>
                <td><button class="toggle-btn">Change Status</button></td>
            </tr>
        </>
    )
}