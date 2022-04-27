import { combineReducers } from 'redux';
import { isErrorSlice } from './error';

const reducers = combineReducers({
  isError: isErrorSlice.reducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
