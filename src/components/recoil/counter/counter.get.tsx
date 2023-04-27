import { useRecoilValue } from 'recoil'
import { counterAtom } from '../state/counterState'

export default function Counter() {
    const count = useRecoilValue(counterAtom)
    return (
        <div>
            {count}
        </div>
    )
}