import { useRecoilState } from 'recoil'
import { converterAtom } from '../state/converterState'

function Tens() {
    const [value, setValue] = useRecoilState(converterAtom)
    return (
        <div>
            <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

export default Tens