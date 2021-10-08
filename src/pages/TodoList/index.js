
import { useRecoilValue } from "recoil"
import { filteredTodoListState } from '../../context'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import TodoListFilters from './components/TodoListFilters'
import TodoListStats from './components/TodoListStats'
const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState)
  return <>
    <h3>TodoList</h3>
    <AddTodo />
    <br />
    <TodoListFilters />
    <TodoListStats />
    {todoList.map(todo => <TodoItem key={todo.id} item={todo}></TodoItem>)}
  </>
}
export default TodoList