import { IS_OPEN_HANDLER } from '../../constants';

const initialState = {
  toDos: [],
  isOpened: false,
  searchString: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case IS_OPEN_HANDLER:
    return {
      ...state,
      isOpened: !state.isOpened
    }
  }
  return state;
};