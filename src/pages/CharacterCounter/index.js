import { useRecoilState, useRecoilValue } from 'recoil'
import { textState, charCntState } from '../../context'

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState)
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <p>Value:{text}</p>
    </div>
  );
}

function CharacterCount() {
  const textLength = useRecoilValue(charCntState)
  return <>Length:{textLength}</>
}