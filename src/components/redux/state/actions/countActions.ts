import * as actionTypes from '../action.types/countTypes'

export const countIncrement = () => ({
    type: actionTypes.COUNT_INCREMENT
})

export const countDecrement = ()=>({
    type : actionTypes.COUNT_DECREMENT
})

export const countIncrementNumber = (paylod:any)=>({
    type: actionTypes.COUNT_INCREMENT_NUMBER,
    paylod
})

export const countDecrementNumber = (paylod:any)=>({
    type: actionTypes.COUNT_DECREMENT_NUMBER,
    paylod
})

export const countReset = () => ({
    type: actionTypes.COUNT_RESET
})




