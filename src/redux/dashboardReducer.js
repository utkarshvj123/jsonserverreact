import {
  GET_CANDIDATE_DATA,
  GET_APPLICATION_DATA,
  GET_QUESTION_DATA,
  DETAIL_SELECTED,
} from "../modules/Dashboard/actions";

const initialState = {
  candidateData: [],
  applicationData: [],
  questionsData:[],
  selectedApplicationDetail: {},
};

export const candidateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATE_DATA:
      return { ...state, candidateData: action.payload };
    case GET_APPLICATION_DATA:
      return { ...state, applicationData: action.payload };
    case GET_QUESTION_DATA:
      return { ...state, questionsData: action.payload };
    case DETAIL_SELECTED:
      return { ...state, selectedApplicationDetail: action.payload };
    default:
      return state;
  }
};
