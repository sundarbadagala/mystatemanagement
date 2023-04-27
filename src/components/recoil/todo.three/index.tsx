import { useRecoilValue } from 'recoil'
import { todosAtom } from '../state/todoState'

import Header from './header'
import Todo from './todo'


export default function Index() {
    const todos = useRecoilValue(todosAtom)
    return (
        <div>
            <Header />
            {
                todos && todos.length > 0 &&
                todos.map((todo: any) =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                    />)
            }
        </div>
    )
}