import { useRecoilState } from 'recoil'
import { getTodoSelectorFamily } from '../state/todoState'

export default function Todo({ id }: any) {
    const [[todo], setTodo] = useRecoilState(getTodoSelectorFamily(id))
    //MAINLY USED FOR API CALLING IN USEEFFCT WITH GIVEN PARAMS FROM URL
    return (
        <div key={todo.id}>
            <input type='text' value={todo.title} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => setTodo('')}>x</button>
        </div>
    )
}