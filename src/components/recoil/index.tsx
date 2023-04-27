import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"

import Home from "./home"
import Counter from './counter'
import Text from './text'
import Converter from './converter'
import TodoOne from './todo.one'
import TodoTwo from './todo.two'
import TodoThree from './todo.three'
import TodoFour from './todo.four'
import Users from "./users"
import UserDetails from "./users/details"
import UserTwo from './users.two'

export default function Index() {
    return (
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/text" element={<Text />} />
                <Route path="/converter" element={<Converter />} />
                <Route path='/todo-one' element={<TodoOne />} />
                <Route path='/todo-two' element={<TodoTwo />} />
                <Route path='/todo-three' element={<TodoThree />} />
                <Route path="/todo-four" element={<TodoFour />} />
                <Route path="/users" element={<Suspense fallback={<div>loading...</div>}><Users /></Suspense>} />
                <Route path="/users/:userId" element={<Suspense fallback={<div>loading...</div>}><UserDetails /></Suspense>} />
                <Route path="/users-two" element={<Suspense fallback={<div>loading...</div>}><UserTwo /></Suspense>} />
            </Routes>
        </RecoilRoot>
    )
}