import axios from "axios";
import { REQUEST_ISSUES, RECEIVE_ISSUES } from "../constant";

const requestIssues = () => ({ type: REQUEST_ISSUES });
const receiveIssues = (data) => ({ type: RECEIVE_ISSUES, data: data });

export function fetchIssues() {
  return (dispatch) => {
    dispatch(requestIssues());
    return axios
      .get("https://api.github.com/repos/DanniBlues9527/article/issues", {
        params: {
          creator: "DanniBlues9527",
          labels: "blog",
        },
      })
      .then((res) => dispatch(receiveIssues(res.data)))
      .catch((e) => console.log(e));
  };
}
