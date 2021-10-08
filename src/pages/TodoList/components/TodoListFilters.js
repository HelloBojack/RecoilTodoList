import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../../context'
function TodoListFilters() {
  const [filter, updateFilter] = useRecoilState(todoListFilterState)
  return <>
    Filter:
    <select value={filter} onChange={e => updateFilter(e.target.value)}>
      <option value="Show All">All</option>
      <option value="Show Completed">Completed</option>
      <option value="Show Uncompleted">Uncompleted</option>
    </select>
  </>
}
export default TodoListFilters