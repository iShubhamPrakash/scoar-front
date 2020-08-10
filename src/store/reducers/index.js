import { combineReducers } from "redux";
import * as actionTypes from "../../constants/actionTypes";

import whiteboardReducer from "./whiteboardReducer";
import authReducer from "./authReducer.js"
import classRoomReducer from "./classRoomReducer";

const test = (state = [], action) => {
  switch (action.type) {
    case actionTypes.TEST:
      alert("Working " + action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
};

export default combineReducers({
  test,
  auth: authReducer,
  whiteBoard: whiteboardReducer,
  classRoom: classRoomReducer
});
