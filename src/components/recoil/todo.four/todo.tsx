import { useRecoilState } from "recoil"
import { todosAtomFamily } from "../state/todoState"

export default function Todo({ id, handleDelete }: any) {
    const [todo, setTodo] = useRecoilState(todosAtomFamily(id))
    return (
        <div>
            <input
                type='text'
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <button onClick={() => handleDelete(todo.id)}>x</button>
        </div>
    )
}