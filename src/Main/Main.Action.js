// Get profile github
export const GET_LIST_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_LIST_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_LIST_FAIL = 'GET_PROFILE_FAIL';

export const getListRequest = (page) => {
  return {type: GET_LIST_REQUEST, payload: { page }};
};
export const getListSuccess = data => {
  return {type: GET_LIST_SUCCESS, payload: { data }};
};
export const getListFail = err => {
  return {type: GET_LIST_FAIL, payload: { err }};
};
