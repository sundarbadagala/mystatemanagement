import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { todosAtomFamily, todosIdsAtom } from '../state/todoState'
import Todo from './todo'

export default function TodoFour() {
    const todoIds = useRecoilValue<any>(todosIdsAtom)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const nextTodoId = todoIds.length
        insertTodo(title, nextTodoId)
        e.currentTarget.reset()

    }
    const insertTodo = useRecoilCallback(
        ({ set }) => (title, id) => {
            set(todosIdsAtom, [...todoIds, id])
            set(todosAtomFamily(id), { id: id, title: title })
        }
    )
    const handleDelete = (id: any) => {
        deleteTodo(id)

    }
    const deleteTodo = useRecoilCallback(
        ({ set }) => (id) => {
            set(todosIdsAtom, todoIds.filter((todoId: any) => todoId !== id))
        }
    )
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='title' placeholder='add todo' />
                <button type='submit'>add</button>
            </form>
            {
                todoIds.map((id: any) => <Todo key={id} id={id} handleDelete={handleDelete} />)
            }
        </div>
    )
}