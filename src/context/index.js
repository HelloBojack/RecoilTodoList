import {
  atom,
  selector
} from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '1', // default value (aka initial value)
});

export const charCntState = selector({
  key: "charCntState",
  get: ({ get }) => {
    const text = get(textState)
    return text.length
  }
})

export const todoListState = atom({
  key: "todoListState",
  default: []
})
export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All'
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    let todoListFilterState1 = get(todoListFilterState)
    let todoListState1 = get(todoListState)
    switch (todoListFilterState1) {
      case 'Show All':
        return todoListState1
      case "Show Completed":
        return todoListState1.filter(item => item.isComplete)
      case "Show Uncompleted":
        return todoListState1.filter(item => !item.isComplete)
    }
  }
})

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    let todoListState1 = get(todoListState)

    return {
      totalNum: todoListState1.length,
      totalCompletedNum: todoListState1.filter(item => item.isComplete).length,
      totalUncompletedNum: todoListState1.filter(item => !item.isComplete).length,
      formattedPercentCompleted: isNaN((todoListState1.filter(item => item.isComplete).length / todoListState1.length * 100).toFixed(2)) ? '' : (todoListState1.filter(item => item.isComplete).length / todoListState1.length * 100).toFixed(2) + '%'
    }
  }
})