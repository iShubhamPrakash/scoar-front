import * as actionTypes from "../../constants/actionTypes";

export const openAuthModal = () =>{
	return{
		type: actionTypes.OPEN_AUTH_MODAL
	}
}

export const closeAuthModal = () =>{
	return{
		type: actionTypes.CLOSE_AUTH_MODAL
	}
}


export const signIn = (userData) => {
	console.log("signIn action payload", userData);
	return {
		type: actionTypes.SIGN_IN,
		token: userData.token,
		role: userData.role,
		uid: userData.uid,
		contactNo: userData.contactNo
	};
};

export const signOut = () => {
	return {
		type: actionTypes.SIGN_OUT,
	};
};

export const handleSignIn = (data) => async dispatch => {
	console.log("Setting data in localstorage", data )
	await localStorage.setItem('scoar_auth_token', data.token)
	console.log("localstorage done.. now dispatching", data )

	return dispatch(signIn(data))
}
