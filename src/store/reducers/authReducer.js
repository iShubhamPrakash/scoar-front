import * as actionTypes from "../../constants/actionTypes";

const initialState = {
	name: "",
	username:"",
	token: null,
	contactNo: null,
	role: null,
	uid: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
		
    case actionTypes.SIGN_IN:
			const { user,token} = action.userData;
			return { ...state, contactNo: user.contactNo,role: user.role,uid: user.uid, token};

    case actionTypes.SIGN_OUT:
			return initialState;

    default:
      return state;
  }
};