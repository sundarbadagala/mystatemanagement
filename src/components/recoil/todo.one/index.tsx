import { useState } from 'react'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { todosAtom, addTodosSelector, deleteTodoSelector, editTodoSelector } from '../state/todoState'

export default function Index() {
    const todos = useRecoilValue(todosAtom)
    const addTodo = useSetRecoilState<any>(addTodosSelector)
    const deleteTodo = useSetRecoilState<any>(deleteTodoSelector)
    const editTodo = useSetRecoilState<any>(editTodoSelector)
    const resetTodos = useResetRecoilState(todosAtom)
    const [todo, setTodo] = useState('')
    const handleChange = (e: any) => {
        setTodo(e.target.value)
    }
    const handleAdd = () => {
        addTodo(todo)
    }
    const handleDelete = (id: any) => {
        deleteTodo(id)
    }
    const handleEdit = (e: any, id: any) => {
        editTodo({
            title: e.target.value,
            id: id
        })
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
            {
                todos && todos.length > 0 &&
                todos.map((todo: any, index: any) =>
                    <div key={todo.id}>
                        {index + 1}{" "}
                        <input type='text' value={todo.title} onChange={(e) => handleEdit(e, todo.id)} />
                        <button onClick={() => handleDelete(todo.id)}>x</button>
                    </div>
                )
            }
        </div>
    )
}