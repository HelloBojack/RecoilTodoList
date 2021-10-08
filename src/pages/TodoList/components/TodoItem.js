import { useRecoilState } from 'recoil';
import { todoListState } from '../../../context'
const TodoItem = ({ item }) => {
  const [todolist, setTodoList] = useRecoilState(todoListState)
  const index = todolist.findIndex((listItem) => listItem === item);
  const toggleItemCompletion = () => {
    let newlist = replaceItemAtIndex(todolist, index, {
      ...item, isComplete: !item.isComplete
    })
    console.log(newlist)
    setTodoList(newlist)
  }
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todolist, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };
  const deleteItem = () => {
    const newList = removeItemAtIndex(todolist, index);

    setTodoList(newList);
  };
  return <li>
    <input type="text" value={item.text} onChange={editItemText} />
    <input type="checkbox" defaultChecked={item.isComplete} onChange={toggleItemCompletion}></input>
    <button onClick={deleteItem}>X</button>
  </li>
}
const replaceItemAtIndex = (list, index, newItem) => {
  return [...list.slice(0, index), newItem, ...list.slice(index + 1)]

}
function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export default TodoItem;