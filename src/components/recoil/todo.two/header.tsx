import { useState } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import {  addTodosSelector, todosAtom } from '../state/todoState'

export default function Header() {
    const addTodo = useSetRecoilState<any>(addTodosSelector)
    const todos = useRecoilValue(todosAtom)
    const resetTodos = useResetRecoilState(todosAtom)
    const [todo, setTodo] = useState('')
    const handleChange = (e: any) => {
        setTodo(e.target.value)
    }
    const handleAdd = () => {
        addTodo(todo)
    }
    const handleReset = () => {
        resetTodos()
    }
    return (
        <div>
            <input type='text' value={todo} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>
            {
                todos.length > 0 && <button onClick={handleReset}>clear all</button>
            }
        </div>
    )
}