import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { loginReducer } from "./loginReducer";
import {candidateReducer} from './dashboardReducer';

const rootReducer = combineReducers({
  homeData:homeReducer,
  isValidUser:loginReducer,
  dashBoardData:candidateReducer
});

export default rootReducer;
