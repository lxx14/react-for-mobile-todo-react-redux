import { IS_OPEN_HANDLER, ADD_TODO } from '../../constants';

export const isOpenedChangeActionType = () => ({ type: IS_OPEN_HANDLER });

export const addToDoActionType = (data) => ({ type: ADD_TODO, data });