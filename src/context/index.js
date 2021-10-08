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