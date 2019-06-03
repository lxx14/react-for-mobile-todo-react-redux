import { combineReducers } from 'redux';
import mainPage from '../components/pages/MainPage/reducer';
import singlePage from '../components/pages/SinglePage/reducer';

export default combineReducers({
  mainPage,
  singlePage
})