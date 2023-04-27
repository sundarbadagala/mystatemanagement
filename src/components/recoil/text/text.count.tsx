import { useRecoilValue } from 'recoil'
import { textSelector } from '../state/textState'

function TextCount() {
    const len = useRecoilValue(textSelector)
    return (
        <div>
            {len}
        </div>
    )
}

export default TextCount