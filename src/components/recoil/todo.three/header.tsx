import { useState } from "react"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { addTodosSelector, todosAtom } from '../state/todoState'

export default function Header() {
    const addTodo = useSetRecoilState<any>(addTodosSelector)
    const todos = useRecoilValue(todosAtom)
    const resetTodos = useResetRecoilState(todosAtom)
    const handleReset = () => {
        resetTodos()
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        if (title !== "") {
            addTodo(title)
            e.currentTarget.reset()
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' />
            <button type="submit">add</button>
            {
                todos.length > 0 && <button onClick={handleReset}>clear all</button>
            }
        </form>
    )
}