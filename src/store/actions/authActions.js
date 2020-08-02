import * as actionTypes from "../../constants/actionTypes";

export const signIn = async (userData) => {

	await localStorage.setItem('scoar_token', userData.token)
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