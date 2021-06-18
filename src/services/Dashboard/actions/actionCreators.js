import { ACTION } from "./actionTypes";

export const todoAddReq = () => {
  return {
    type: ACTION.TODO_ADD_REQUEST,
  };
};

export const todoAddSuccess = (payload) => {
  return {
    type: ACTION.TODO_ADD_REQUEST,
    payload,
  };
};

export const todoAddFailure = () => {
  return {
    type: ACTION.TODO_ADD_FAILURE,
  };
};
