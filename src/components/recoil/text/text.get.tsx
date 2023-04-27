import { useRecoilValue } from 'recoil'
import { textAtom, textSelector } from '../state/textState'

function TextGet() {
    const text = useRecoilValue(textAtom)
    const txtLength = useRecoilValue(textSelector)
    return (
        <div>
            {text} {txtLength}
        </div>
    )
}

export default TextGet