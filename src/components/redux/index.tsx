import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/store'

import Home from './home'
import Counter from './counter'
import Converter from './converter'


function Index() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/converter' element={<Converter />} />
            </Routes>
        </Provider>
    )
}

export default Index