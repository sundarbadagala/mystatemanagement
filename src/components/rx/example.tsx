import { map } from "rxjs/operators"
import { bind, Subscribe } from "@react-rxjs/core"
import { createSignal } from "@react-rxjs/utils"

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
const [textChange$, setText] = createSignal<any>();

const [useText, text$] = bind<any>(textChange$, "hello")

const [useCharCount, charCount$] = bind<any>(text$.pipe(map((text:any)=>text.length)))

function TextInput() {
  const text = useText()
  const charCount = useCharCount()

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      Echo: {text} {charCount}
    </div>
  )
}

export default TextInput