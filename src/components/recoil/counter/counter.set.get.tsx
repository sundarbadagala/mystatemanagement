import { useRecoilState } from 'recoil'
import {counterAtom} from '../state/counterState'

export default function Counter(){
    const [count, setCount] = useRecoilState(counterAtom)
    return(
        <div>
            {count}
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
        </div>
    )
}