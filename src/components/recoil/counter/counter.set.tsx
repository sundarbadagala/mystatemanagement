import { useRecoilState, useSetRecoilState } from 'recoil'
import { counterAtom } from '../state/counterState'

export default function Counter() {
    const setCount = useSetRecoilState(counterAtom)
    return (
        <div>
            <button onClick={(prev) => setCount(0)}>reset</button>
        </div>
    )
}