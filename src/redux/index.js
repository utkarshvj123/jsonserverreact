import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import {candidateReducer} from './dashboardReducer';

const rootReducer = combineReducers({
  isValidUser:loginReducer,
  dashBoardData:candidateReducer
});

export default rootReducer;
