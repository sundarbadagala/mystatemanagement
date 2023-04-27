import { useRecoilState } from 'recoil'
import { textAtom } from '../state/textState'

function TextSetGet() {
    const [text, setText] = useRecoilState(textAtom)
    return (
        <div>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}

export default TextSetGet