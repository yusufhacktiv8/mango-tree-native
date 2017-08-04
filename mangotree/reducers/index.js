import { combineReducers } from 'redux';
import { tree } from './tree';
import { navReducer } from './nav';

const rootReducer = combineReducers(
  {
    tree,
    nav: navReducer,
  },
);

export default rootReducer;
