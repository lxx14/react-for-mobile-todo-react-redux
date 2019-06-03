import { IS_OPEN_HANDLER, ADD_TODO, ADD_SEARCH_REQUEST } from '../../constants';

export const isOpenedChangeActionType = () => ({ type: IS_OPEN_HANDLER });

export const addToDoActionType = (data) => ({ type: ADD_TODO, data });

export const searchToDoActionType = (data) => ({ type: ADD_SEARCH_REQUEST, data });