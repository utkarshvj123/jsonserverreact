import { GET_CANDIDATE_DATA } from "../../Dashboard/actions";
import data from "../../../constants/data.json";
import { filteringString } from "../../../constants/globalFunction";
import Axios from "axios";

export const IS_VALID_USER = "IS_VALID_USER";

export function authenticateUserAction(response) {
  return (dispatch) => {
    dispatch({
      type: IS_VALID_USER,
      payload: response,
    });

  };
}