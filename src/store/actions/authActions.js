import * as actionTypes from "../../constants/actionTypes";
import { getDataFromCookie, removeCookie } from "../../utils/cookieData";
import { AUTH_COOKIE_NAME } from "../../constants/base";

export const openAuthModal = () => {
	return {
		type: actionTypes.OPEN_AUTH_MODAL,
	};
};

export const closeAuthModal = () => {
	return {
		type: actionTypes.CLOSE_AUTH_MODAL,
	};
};

export const signIn = (userData) => {
	console.log("signIn action payload", userData);
	return {
		type: actionTypes.SIGN_IN,
		token: userData.token,
		role: userData.role,
		uid: userData.uid,
		contactNo: userData.contactNo,
		basicDetailsExist: userData.basicDetailsExist,
	};
};

export const signOut = () => {
	return {
		type: actionTypes.SIGN_OUT,
	};
};

export const handleSignOut = (data) => async (dispatch) => {
	await removeCookie(AUTH_COOKIE_NAME);
	return dispatch(signOut());
};

export const getInitialAuthData = () => async (dispatch) => {
	const data = await getDataFromCookie(AUTH_COOKIE_NAME);

	const userData = JSON.parse(data);

	// console.log(typeof userData, userData);

	return dispatch(signIn(userData));
};
