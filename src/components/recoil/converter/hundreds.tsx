import { useRecoilState, useRecoilValue } from 'recoil'
import { converterSelector } from '../state/converterState'


function Hundreds() {
    const [value, setValue] = useRecoilState<any>(converterSelector)
    return (
        <div>
            <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
    )
}

export default Hundreds