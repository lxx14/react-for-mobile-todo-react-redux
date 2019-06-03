import { IS_OPEN_HANDLER, ADD_TODO } from '../../constants';

const initialState = {
  toDos: [],
  isOpened: false,
  searchString: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_OPEN_HANDLER:
      return {
        ...state,
        isOpened: !state.isOpened
      }
    case ADD_TODO:
      return {
        ...state,
        toDos: [action.data, ...state.toDos]
      }
  }

  return state;
};