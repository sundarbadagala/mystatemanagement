import { useSetRecoilState } from 'recoil'
import { deleteTodoSelector, editTodoSelector } from '../state/todoState'

export default function Todo({ todo, index }: any) {
    const deleteTodo = useSetRecoilState<any>(deleteTodoSelector)
    const editTodo = useSetRecoilState<any>(editTodoSelector)
    const handleDelete = (id: any) => {
        deleteTodo(id)
    }
    const handleEdit = (e: any, id: any) => {
        editTodo({
            title: e.target.value,
            id: id
        })
    }
    return (
        <div key={todo.id}>
            {index}{" "}
            <input type='text' value={todo.title} onChange={(e) => handleEdit(e, todo.id)} />
            <button onClick={() => handleDelete(todo.id)}>x</button>
        </div>
    )
}