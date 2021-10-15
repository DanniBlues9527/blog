import { REQUEST_ISSUES, RECEIVE_ISSUES } from "../constant";

const iniState = { isFetching: false, items: [] };

export default function blogReducer(preState = iniState, action) {
  const { type, data } = action;

  switch (type) {
    case REQUEST_ISSUES:
      return Object.assign({}, preState, { isFetching: true });
    case RECEIVE_ISSUES:
      return Object.assign({}, preState, { isFetching: false, items: data });
    default:
      return preState;
  }
}
