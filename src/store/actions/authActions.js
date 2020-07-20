import * as actionTypes from "../../constants/actionTypes";

export const signIn = (userData) => {
  return {
		type: actionTypes.SIGN_IN,
		userData
	};
};

export const signOut = () => {
  return {
		type: actionTypes.SIGN_OUT,
	};
};