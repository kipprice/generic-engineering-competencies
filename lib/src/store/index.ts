import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { State } from "../models";
import {
  elements,
  hiddenColumns,
  hiddenRows,
  columns,
  rows,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
  singleFileOnly,
} from "../reducers";

const rootReducer = combineReducers({
  elements,
  columns,
  rows,
  hiddenColumns,
  hiddenRows,
  displayMode,
  similarityGraph,
  enableDiffs,
  renderHtml,
  disableCollapsing,
  singleFileOnly,
});

export const store = createStore<State, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);
