import Axios from "axios";

export const GET_CANDIDATE_DATA = "GET_CANDIDATE_DATA";
export const GET_APPLICATION_DATA = "GET_APPLICATION_DATA";
export const GET_QUESTION_DATA = "GET_QUESTION_DATA";
export const DETAIL_SELECTED = "DETAIL_SELECTED";

export function getCandidateData() {
  return (dispatch) => {
    Axios.get("http://localhost:3000/candidates").then((res) => {
      console.log(res, "........response in login action");
      dispatch({
        type: GET_CANDIDATE_DATA,
        payload: res.data,
      });
    });
  };
}

export function getApplication() {
  return (dispatch) => {
    Axios.get("http://localhost:3000/applications").then((res) => {
      console.log(res, "........response in login action");
      dispatch({
        type: GET_APPLICATION_DATA,
        payload: res.data,
      });
    });
  };
}

export function getQuestions() {
  return (dispatch) => {
    Axios.get("http://localhost:3000/questions").then((res) => {
      console.log(res, "........response in login action");
      dispatch({
        type: GET_QUESTION_DATA,
        payload: res.data,
      });
    });
  };
}
// //-----Modal popup-------//
// export function modalPopUp(value) {
//   return dispatch => {
//     dispatch({
//       type: MODAL_POP_UP,
//       payload: value
//     });
//   };
// }

export function selectedApplicationData(value) {
  return (dispatch) => {
    dispatch({
      type: DETAIL_SELECTED,
      payload: value,
    });
  };
}

export function callingPutApi(value) {
  Axios.put("http://localhost:3000/applications/" + value.id, value).then(
    (res) => {
      return (dispatch) => {
        dispatch({
          type: DETAIL_SELECTED,
          payload: value,
        });
      };
    }
  );
}
