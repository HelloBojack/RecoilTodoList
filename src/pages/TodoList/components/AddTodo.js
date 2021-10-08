import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../../context'
// 用于创建唯一 id 的工具函数
let id = 0;
function getId() {
  return id++;
}
function AddTodo() {
  const [input, setInput] = useState('')
  const settodolist = useSetRecoilState(todoListState)
  const addTodoItem = () => {
    settodolist((oldtodolist) => [
      ...oldtodolist,
      {
        id: getId(),
        text: input,
        isComplete: false,
      }
    ])
    setInput('')
  }
  return <>
    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
    <button onClick={addTodoItem}>Add</button>
  </>
}

export default AddTodo